
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Wrench, Tractor, Clock, Calendar } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";

interface Combo {
  id: number;
  name: string;
  description: string;
  machines: string[];
  workers: string[];
  image: string;
  price: number;
  duration: string;
}

interface ComboCardProps {
  combo: Combo;
}

const ComboCard = ({ combo }: ComboCardProps) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  
  const handleBookCombo = () => {
    toast.success("Combo package booked!", {
      description: `You booked ${combo.name} package for ₹${combo.price}. Duration: ${combo.duration}`,
    });
  };

  const handleViewDetails = () => {
    setIsDetailsOpen(true);
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow border-green-100 bg-gradient-to-b from-white to-green-50 h-full flex flex-col">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={combo.image}
            alt={combo.name}
            className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Package className="h-5 w-5 text-green-600" />
            {combo.name}
          </CardTitle>
          <CardDescription>{combo.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 flex-grow">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
              <Tractor className="h-4 w-4" />
              Included Machinery:
            </h4>
            <ul className="list-disc list-inside text-muted-foreground">
              {combo.machines.map((machine) => (
                <li key={machine}>{machine}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
              <Wrench className="h-4 w-4" />
              Skilled Workers:
            </h4>
            <ul className="list-disc list-inside text-muted-foreground">
              {combo.workers.map((worker) => (
                <li key={worker}>{worker}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center pt-2">
            <div className="text-2xl font-bold text-green-700">₹{combo.price}</div>
            <div className="text-muted-foreground">{combo.duration}</div>
          </div>
        </CardContent>
        <CardFooter className="gap-2 mt-auto">
          <Button 
            onClick={handleBookCombo} 
            className="flex-1 hover:bg-green-600 bg-green-700 shadow-md hover:shadow-lg transition-all"
          >
            Book Combo Package
          </Button>
          <Button 
            variant="outline" 
            onClick={handleViewDetails}
            className="hover:bg-green-100 hover:text-green-800 border-green-200 text-green-700 shadow-sm hover:shadow-md transition-all"
          >
            View Details
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-[600px] bg-gradient-to-b from-white to-green-50 border-green-100">
          <DialogHeader>
            <DialogTitle className="text-green-800 text-2xl flex items-center gap-2">
              <Package className="h-6 w-6 text-green-600" />
              {combo.name} Details
            </DialogTitle>
            <DialogDescription>
              Complete information about this combo package
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="aspect-video relative overflow-hidden rounded-md">
              <img
                src={combo.image}
                alt={combo.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Description</h3>
              <p className="text-muted-foreground">{combo.description}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700 text-lg">
                  <Tractor className="h-5 w-5" />
                  Included Machinery
                </h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {combo.machines.map((machine) => (
                    <li key={machine}>{machine}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700 text-lg">
                  <Wrench className="h-5 w-5" />
                  Skilled Workers
                </h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {combo.workers.map((worker) => (
                    <li key={worker}>{worker}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <Clock className="h-8 w-8 text-green-600" />
                <div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="text-xl font-semibold text-green-800">{combo.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <Calendar className="h-8 w-8 text-green-600" />
                <div>
                  <div className="text-sm text-muted-foreground">Package Price</div>
                  <div className="text-xl font-semibold text-green-800">₹{combo.price}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button 
              onClick={() => {
                handleBookCombo();
                setIsDetailsOpen(false);
              }}
              className="bg-green-700 hover:bg-green-600"
            >
              Book This Package
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ComboCard;
