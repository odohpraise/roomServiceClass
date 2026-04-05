//class Room {

class Room {

    static totalRooms = 0;

    constructor(roomId, roomName, availableRooms) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.availableRooms = availableRooms;

        Room.totalRooms++;
    }

    getAvailableRooms() {
        if (this.availableRooms > 0) {
            // this.availableRooms--;
            console.log(`Available rooms for ${this.roomName}: ${this.availableRooms} rooms left.`);
        } else {
            console.log("No available rooms.");
        }
    }

    totalavailableRooms() {
        return this.availableRooms;
    }

    static gettotalRooms() {
        return Room.totalRooms;
    }

}


//class customer 

class Customer {

    static totalCustomers = 0;

    constructor(name, contact, age) {
        this.name = name;
        this.contact = contact;
        this.age = age;

        Customer.totalCustomers++;
    }

    checksRoomAvailability(room) {
        if (room.availableRooms > 0) {
            console.log(`Room ${room.roomName} is available for booking.`);
        } else {
            console.log(`Room ${room.roomName} is not available for booking.`);
        }
    }

    booksRoom(room) {
        if (room.availableRooms > 0) {
            room.availableRooms--;
            console.log(`${this.name} with ${this.contact} has booked a room in ${room.roomName}. Now ${room.roomName} has ${room.availableRooms} rooms left.`);
        } else {
            console.log(`Sorry, ${this.name}, no rooms available in ${room.roomName}.`);
        }
    }

    exitRoom(room) {
        room.availableRooms++;
        console.log(`${this.name} with ${this.contact} has exited the room ${room.roomName}. Now ${room.roomName} has ${room.availableRooms} rooms available.`);
    }
}

const room1 = new Room("0001", "Deluxe", 20);
room1.getAvailableRooms();
const room2 = new Room("0002", "Standard", 15);
room2.getAvailableRooms();
const room3 = new Room("0003", "Suite", 10);
room3.getAvailableRooms();

totalAvailableRooms = room1.totalavailableRooms() + room2.totalavailableRooms() + room3.totalavailableRooms();
console.log(`Total available rooms: ${totalAvailableRooms}`);

console.log(`Total rooms created: ${Room.gettotalRooms()}`);

console.log("--------------------------------------------------------")
console.log("--------------------------------------------------------")

const customer1 = new Customer("Praise Odoh", "123-456-7890", 30);
const customer2 = new Customer("Taiwo Adeyemi", "987-654-3210", 25);
const customer3 = new Customer("Aisha Bello", "555-123-4567", 28);

customer1.checksRoomAvailability(room1);
customer1.checksRoomAvailability(room2);
console.log("--------------------------------------------------------")
customer2.checksRoomAvailability(room2);
customer2.checksRoomAvailability(room3);

console.log("--------------------------------------------------------")
customer1.booksRoom(room1);
customer3.booksRoom(room3);
console.log("--------------------------------------------------------")
customer2.booksRoom(room2);
console.log("--------------------------------------------------------")
customer1.exitRoom(room1);
console.log("--------------------------------------------------------")
console.log(`Total customers created: ${Customer.totalCustomers}`);