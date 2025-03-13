
interface SchemaMarkupProps {
  schema: Record<string, any> | Record<string, any>[];
}

export const SchemaMarkup = ({ schema }: SchemaMarkupProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
