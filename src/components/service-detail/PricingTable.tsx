
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface PricingTableProps {
  title?: string;
}

export const PricingTable = ({ title = "Professional Rug Cleaning Services" }: PricingTableProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold text-center mb-6">
            {title}
          </h2>
          <p className="text-lg text-center mb-8">
            We provide expert cleaning for all types of rugs including Persian, Oriental, Wool, Silk, and more. 
            Our standard pricing is £20-30 per square meter with a minimum charge of £70 regardless of rug size. 
            All prices include collection, professional cleaning, and delivery.
          </p>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <h3 className="text-xl font-semibold p-4 bg-blue-50 text-center">
              Standard Rug Cleaning Prices
            </h3>
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>
                  *Minimum charge of £70 applies to all services
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rug Size</TableHead>
                    <TableHead>Approximate Dimensions</TableHead>
                    <TableHead>Price Range</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Small</TableCell>
                    <TableCell>1m² (1m x 1m)</TableCell>
                    <TableCell>£70*</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Medium</TableCell>
                    <TableCell>2m² (1.5m x 1.3m)</TableCell>
                    <TableCell>£70*</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Large</TableCell>
                    <TableCell>4m² (2m x 2m)</TableCell>
                    <TableCell>£80-£120</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">X-Large</TableCell>
                    <TableCell>6m² (2m x 3m)</TableCell>
                    <TableCell>£120-£180</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Oversize</TableCell>
                    <TableCell>9m² (3m x 3m)</TableCell>
                    <TableCell>£180-£270</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Mansion</TableCell>
                    <TableCell>12m² (3m x 4m)</TableCell>
                    <TableCell>£240-£360</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="p-4 text-sm text-gray-600">
              <p>Note: Additional charges may apply depending on the condition of your rug. Stubborn stains, heavy soiling, pet odors, or extensive damage may require special treatments at extra cost. We provide a detailed quotation after initial inspection.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
