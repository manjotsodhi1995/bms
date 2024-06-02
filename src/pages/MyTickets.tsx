import Navbar from "../components/Navbar"
import TicketCard from "../components/ticket/TicketCard";
function MyTickets() {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <div className="md:w-[40%] w-[93%] gap-4 overflow-x-hidden  items-left text-left flex flex-col justify-left">
        <div className="md:text-[1.6rem] 2xl:text-[2rem] text-[1.5rem] font-medium">
          Your Tickets
        </div>
        <div className="flex flex-col gap-4">
          <TicketCard
            imageUrl="https://s3-alpha-sig.figma.com/img/51a9/4279/4acb80e8555b269e44d19f8b9e13d5ae?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DttHWsi8rjlN6wwPOaLiiagDUqa2HYFybC2qB3OubazlMNY0dvLg3kCGNUuhu~7v7ty1CqeV4JXjOIpOP0KS~oJOTyqeppcUAY8uC0Bkf0bN-7si5EyRBqgs~d9mE1nka-mRuYfdfFHukZdtvlAq47EMaxMJaXXXA3A6~pOrprD9aGATDZrrpu~TZ29SWoFgRBMdlhBYm2vv3rsqtjgRJGQz1~Ih1jZ6Xdz5eXDcjg7OjhmbTDCosZlAd6LU-EHpRGUKzO2g7BvXQV8pDn~4hFWqFXLrys3qKPiz8iaBU2bHy70jU-H3QLfg0ejVuSJxcfYsGx0m-mYyv8ZxZadcSQ__"
            name="Fall Guy - Movie Screening"
            genre="Comedy"
            location="19a Koryun St, Yerevan 0009"
            date="Thu, 15th June - 17:00"
          />
          <TicketCard
            imageUrl="https://s3-alpha-sig.figma.com/img/51a9/4279/4acb80e8555b269e44d19f8b9e13d5ae?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DttHWsi8rjlN6wwPOaLiiagDUqa2HYFybC2qB3OubazlMNY0dvLg3kCGNUuhu~7v7ty1CqeV4JXjOIpOP0KS~oJOTyqeppcUAY8uC0Bkf0bN-7si5EyRBqgs~d9mE1nka-mRuYfdfFHukZdtvlAq47EMaxMJaXXXA3A6~pOrprD9aGATDZrrpu~TZ29SWoFgRBMdlhBYm2vv3rsqtjgRJGQz1~Ih1jZ6Xdz5eXDcjg7OjhmbTDCosZlAd6LU-EHpRGUKzO2g7BvXQV8pDn~4hFWqFXLrys3qKPiz8iaBU2bHy70jU-H3QLfg0ejVuSJxcfYsGx0m-mYyv8ZxZadcSQ__"
            name="Fall Guy - Movie Screening"
            genre="Comedy"
            location="19a Koryun St, Yerevan 0009"
            date="Thu, 15th June - 17:00"
          />
          <TicketCard
            imageUrl="https://s3-alpha-sig.figma.com/img/51a9/4279/4acb80e8555b269e44d19f8b9e13d5ae?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DttHWsi8rjlN6wwPOaLiiagDUqa2HYFybC2qB3OubazlMNY0dvLg3kCGNUuhu~7v7ty1CqeV4JXjOIpOP0KS~oJOTyqeppcUAY8uC0Bkf0bN-7si5EyRBqgs~d9mE1nka-mRuYfdfFHukZdtvlAq47EMaxMJaXXXA3A6~pOrprD9aGATDZrrpu~TZ29SWoFgRBMdlhBYm2vv3rsqtjgRJGQz1~Ih1jZ6Xdz5eXDcjg7OjhmbTDCosZlAd6LU-EHpRGUKzO2g7BvXQV8pDn~4hFWqFXLrys3qKPiz8iaBU2bHy70jU-H3QLfg0ejVuSJxcfYsGx0m-mYyv8ZxZadcSQ__"
            name="Fall Guy - Movie Screening"
            genre="Comedy"
            location="19a Koryun St, Yerevan 0009"
            date="Thu, 15th June - 17:00"
          />
        </div>
      </div>
    </div>
  );
}

export default MyTickets