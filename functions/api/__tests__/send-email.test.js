import { afterEach, describe, expect, it, vi } from 'vitest';
import { onRequest } from '../send-email';
import nodemailer from 'nodemailer';

// Mock nodemailer with shared transport instance
const mockVerify = vi.fn();
const mockSendMail = vi.fn();
const mockCreateTransport = vi.fn(() => ({
  verify: mockVerify,
  sendMail: mockSendMail
}));

vi.mock('nodemailer', async (importOriginal) => ({
  ...await importOriginal(),
  createTransport: mockCreateTransport
}));

const mockEnv = {
  SMTP_HOST: 'smtp.test.com',
  SMTP_PORT: '465',
  SMTP_USER: 'testuser',
  SMTP_PASS: 'testpass',
  TO_EMAIL: 'test@example.com'
};

describe('Email API', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  // Helper function to create mock context
  const createMockContext = (method = 'POST', body = {}) => ({
    request: {
      method,
      json: () => Promise.resolve(body)
    },
    env: mockEnv
  });

  it('should handle OPTIONS request for CORS', async () => {
    const response = await onRequest(createMockContext('OPTIONS'));
    expect(response.status).toBe(200);
    expect(response.headers.get('Access-Control-Allow-Origin')).toBe('*');
  });

  it('should reject non-POST methods', async () => {
    const response = await onRequest(createMockContext('GET'));
    expect(response.status).toBe(405);
    const data = await response.json();
    expect(data.error).toBe('Method not allowed');
  });

  it('should validate required fields', async () => {
    const response = await onRequest(createMockContext('POST', {}));
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toBe('All fields are required');
  });

  it('should handle missing SMTP configuration', async () => {
    const response = await onRequest({
      ...createMockContext('POST', {
        name: 'Test',
        email: 'test@example.com',
        phone: '1234567890',
        message: 'Hello'
      }),
      env: {} // Empty environment variables
    });
    
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data.error).toBe('Email service is not properly configured');
  });

  it('should handle SMTP connection failures', async () => {
    nodemailer.createTransport().verify.mockRejectedValue(new Error('Connection failed'));
    
    const response = await onRequest(createMockContext('POST', {
      name: 'Test',
      email: 'test@example.com',
      phone: '1234567890',
      message: 'Hello'
    }));
    
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data.error).toBe('Email server connection failed');
  });

  it('should successfully send email', async () => {
    nodemailer.createTransport().verify.mockResolvedValue(true);
    nodemailer.createTransport().sendMail.mockResolvedValue({ messageId: '123' });
    
    const response = await onRequest(createMockContext('POST', {
      name: 'Test',
      email: 'test@example.com',
      phone: '1234567890',
      message: 'Hello'
    }));
    
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.messageId).toBe('123');
  });
});
