
import { afterEach, describe, expect, it, vi } from 'vitest';
import { onRequest } from '../send-email';
import { Resend } from 'resend';

// Mock Resend
vi.mock('resend', () => {
  const mockSendEmail = vi.fn();
  return {
    Resend: vi.fn().mockImplementation(() => ({
      emails: {
        send: mockSendEmail
      }
    }))
  };
});

const mockEnv = {
  RESEND_API_KEY: 'test_api_key',
  FROM_EMAIL: 'admin@londonrugcleaning.co.uk',
  TO_EMAIL: 'info@londonrugcleaning.co.uk'
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

  it('should handle missing API key configuration', async () => {
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

  it('should handle email sending errors', async () => {
    // Configure the mock to return an error
    const mockError = new Error('Failed to send email');
    Resend().emails.send.mockResolvedValue({ error: mockError });
    
    const response = await onRequest(createMockContext('POST', {
      name: 'Test',
      email: 'test@example.com',
      phone: '1234567890',
      message: 'Hello'
    }));
    
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data.error).toBe('Failed to send email');
  });

  it('should successfully send email', async () => {
    // Configure the mock to return success
    Resend().emails.send.mockResolvedValue({ 
      data: { id: 'email_123' },
      error: null
    });
    
    const response = await onRequest(createMockContext('POST', {
      name: 'Test',
      email: 'test@example.com',
      phone: '1234567890',
      message: 'Hello'
    }));
    
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.messageId).toBe('email_123');
  });
});
