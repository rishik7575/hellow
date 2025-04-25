
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Clock, Tractor, Info } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface Machine {
  id: number;
  name: string;
  description: string;
  image: string;
  pricePerHour: number;
}

interface MachineryCardProps {
  machine: Machine;
}

const MachineryCard = ({ machine }: MachineryCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [hours, setHours] = useState(1);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");

  const handleRentNow = () => {
    setIsDialogOpen(true);
  };

  const handleViewDetails = () => {
    setIsDetailsOpen(true);
  };

  const handleSubmitRental = () => {
    setIsDialogOpen(false);
    toast.success("Rental request submitted!", {
      description: `You requested to rent ${machine.name} for ${hours} hours on ${date ? format(date, "PP") : "N/A"} at ${time || "N/A"}.`,
    });
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow border-green-100 bg-gradient-to-b from-white to-green-50 h-full flex flex-col">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={machine.image}
            alt={machine.name}
            className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Tractor className="h-5 w-5 text-green-600" />
            {machine.name}
          </CardTitle>
          <CardDescription>{machine.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-2 pb-4 flex-grow">
          <div className="text-2xl font-bold text-green-700">
            ₹{machine.pricePerHour}/hr
          </div>
        </CardContent>
        <CardFooter className="gap-2 mt-auto">
          <Button 
            onClick={handleRentNow} 
            className="flex-1 hover:bg-green-600 bg-green-700 shadow-md hover:shadow-lg transition-all"
          >
            Rent Now
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gradient-to-b from-white to-green-50 border-green-100">
          <DialogHeader>
            <DialogTitle className="text-green-800">Rent {machine.name}</DialogTitle>
            <DialogDescription>
              Fill in the details to rent this machine.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="hours" className="text-right">
                Hours
              </Label>
              <Input
                id="hours"
                type="number"
                min="1"
                className="col-span-3"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value))}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <div className="col-span-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="time" className="text-right">
                Time
              </Label>
              <Input
                id="time"
                type="time"
                className="col-span-3"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">
                Total
              </Label>
              <div className="col-span-3 text-xl font-bold text-green-700">
                ₹{machine.pricePerHour * hours}
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button 
              onClick={handleSubmitRental} 
              className="bg-green-700 hover:bg-green-600"
            >
              Submit Rental
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-[550px] bg-gradient-to-b from-white to-green-50 border-green-100">
          <DialogHeader>
            <DialogTitle className="text-green-800 text-2xl flex items-center gap-2">
              <Tractor className="h-6 w-6 text-green-600" />
              {machine.name} Details
            </DialogTitle>
            <DialogDescription>
              Complete information about this machine
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="aspect-video relative overflow-hidden rounded-md">
              <img
                src={machine.image}
                alt={machine.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Description</h3>
              <p className="text-muted-foreground">{machine.description}</p>
            </div>
            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
              <Clock className="h-8 w-8 text-green-600" />
              <div>
                <div className="text-sm text-muted-foreground">Hourly Rate</div>
                <div className="text-xl font-semibold text-green-800">₹{machine.pricePerHour}/hour</div>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Info className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">Special Notes</h4>
              </div>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Includes fuel and basic maintenance</li>
                <li>Operator available at additional cost</li>
                <li>Available for daily or weekly rental</li>
                <li>Free delivery within 10km radius</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button 
              onClick={() => {
                setIsDetailsOpen(false);
                setIsDialogOpen(true);
              }}
              className="bg-green-700 hover:bg-green-600"
            >
              Rent Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MachineryCard;
