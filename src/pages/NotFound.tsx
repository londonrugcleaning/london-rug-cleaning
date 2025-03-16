
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeadMeta } from "@/components/HeadMeta";

const NotFound = () => {
  return (
    <>
      <HeadMeta
        title="Page Not Found - London Rug Cleaning"
        description="The page you are looking for could not be found."
        noindex={true}
      />
      
      <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mt-4 max-w-md text-muted-foreground">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button asChild>
            <Link to="/" aria-label="Return to homepage">
              Return to Homepage
            </Link>
          </Button>
          
          <Button variant="outline" asChild>
            <Link to="/contact" aria-label="Contact us for assistance">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
