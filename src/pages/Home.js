import { Avatar, Button, Center, Heading, HStack, VStack } from "@chakra-ui/react";
import BookingCard from "../components/BookingCard";

export default function Home() {
    return (
        <VStack height={'100vh'} bg={'gray.50'}>
            <VStack width={{ "sm": "100%", "lg": "1000px" }} padding={'50px'}>
                <HStack justifyContent={'space-between'} width={'100%'}>
                    {/* name to be stored and retreived from localstrorage */}
                    <Heading fontSize={'2xl'}>Hi $firstname</Heading>
                    {/* pass full name here */}
                    <Avatar name="John Doe" />
                </HStack>
                <HStack justifyContent={'space-between'} paddingTop={'40px'} paddingBottom={'20px'} width={'100%'}>
                    <Heading fontSize={'2xl'}>All Upcoming Bookings</Heading>
                    <Button colorScheme={'blue'}>New Booking</Button>
                </HStack>
                {/* to be made into a map using data fetched from api */}
                <BookingCard location='Bangalore' time='17:00 - 18:00' date='21/10/2022' />
                <BookingCard location='Gurgaon' time='18:00 - 19:00' date='23/10/2022' />
            </VStack>
        </VStack>
    )
}