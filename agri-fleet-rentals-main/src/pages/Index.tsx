
import { Button } from "@/components/ui/button";
import { Tractor } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Welcome to AgriLift</h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Revolutionizing agriculture with modern machinery rentals and professional services.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link to="/machinery">
            <Tractor className="h-5 w-5" />
            View Available Machinery
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
