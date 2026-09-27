// ==========================================
// 1. ABSTRACTION & BASE CLASS
// Abstract base class representing a generic vehicle
// ==========================================
class Vehicle {
  // Encapsulation 1: Private field for internal status
  #engineRunning = false;

  constructor(make, model, year) { // Constructor 1
    if (new.target === Vehicle) {
      throw new Error("Cannot instantiate abstract class Vehicle directly.");
    }
    this.make = make;       // Variable/Property 1
    this.model = model;     // Variable/Property 2
    this.year = year;       // Variable/Property 3
  }

  // Method 1
  startEngine() {
    this.#engineRunning = true;
    return `${this.make} ${this.model} engine started.`;
  }

  // Method 2 (Polymorphic method intended to be overridden)
  getDetails() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

// ==========================================
// 2. INHERITANCE (Derived Class 1)
// ==========================================
class Car extends Vehicle {
  // Encapsulation 2: Private field for mileage
  #mileage = 0;

  constructor(make, model, year, doors) { // Constructor 2
    super(make, model, year); // Inheritance link
    this.doors = doors;
  }

  // Method 3: Polymorphism (Overrides getDetails)
  getDetails() {
    return `${super.getDetails()} (${this.doors}-door Car)`;
  }

  // Method 4
  drive(distance) {
    this.#mileage += distance;
    return `Drove ${distance} km. Total mileage: ${this.#mileage} km.`;
  }
}

// ==========================================
// 3. INHERITANCE (Derived Class 2)
// ==========================================
class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year, 4);
    this.batteryCapacity = batteryCapacity;
  }

  // Polymorphism (Overrides getDetails again)
  getDetails() {
    return `${this.year} ${this.make} ${this.model} EV (${this.batteryCapacity} kWh battery)`;
  }
}

// ==========================================
// 4. CLASS 4: Fleet Manager
// ==========================================
class FleetManager {
  constructor() {
    this.fleet = [];
  }

  // Method 5
  addVehicle(vehicle) {
    this.fleet.push(vehicle);
  }
}

// ==========================================
// OBJECT LITERALS
// ==========================================
// Object Literal 1
const serviceConfig = {
  maxMileageThreshold: 15000,
  inspectionFee: 50
};

// Object Literal 2
const shopInfo = {
  name: "Apex Auto Care",
  location: "Sector 7"
};

// ==========================================
// ARRAYS & OBJECT INSTANTIATION
// ==========================================
// Array 1: Fleet array holding instantiated Objects
// Objects 1, 2, and 3:
const car1 = new Car("Toyota", "Camry", 2020, 4);
const car2 = new Car("Ford", "Mustang", 2018, 2);
const ev1 = new ElectricCar("Tesla", "Model 3", 2023, 75);

const vehicleFleet = [car1, car2, ev1]; 

// Array 2: Maintenance checklist
const maintenanceTasks = ["Oil Change", "Tire Rotation", "Brake Inspection"];

// Array 3: Logs tracking actions
const serviceLogs = [];

// Object 4: FleetManager instance
const manager = new FleetManager();
vehicleFleet.forEach(v => manager.addVehicle(v));

// ==========================================
// CONDITIONALS & LOOPS IN ACTION
// ==========================================

console.log(`=== Welcome to ${shopInfo.name} (${shopInfo.location}) ===\n`);

// POLYMORPHISM & LOOP 1: For-of Loop
console.log("--- Fleet Inspection (Polymorphism Demo) ---");
for (const vehicle of vehicleFleet) {
  // Polymorphic call: output varies depending on whether it's a Car or ElectricCar
  console.log(vehicle.getDetails()); 

  // Conditional 1
  if (vehicle instanceof ElectricCar) {
    serviceLogs.push(`Checked battery state for ${vehicle.model}.`);
  } else if (vehicle.year < 2019) { // Conditional 2
    serviceLogs.push(`Flagged ${vehicle.model} for aging component check.`);
  } else { // Conditional 3
    serviceLogs.push(`Standard maintenance logged for ${vehicle.model}.`);
  }
}

// LOOP 2: Standard For Loop
console.log("\n--- Executing Service Checklist ---");
for (let i = 0; i < maintenanceTasks.length; i++) {
  console.log(`Task ${i + 1}: Performing ${maintenanceTasks[i]}...`);
}

// Driving simulation
car1.drive(120);

// LOOP 3: While Loop
console.log("\n--- Processing Remaining Logs ---");
let index = 0;
while (index < serviceLogs.length) {
  console.log(`Log #${index + 1}: ${serviceLogs[index]}`);
  index++;
}