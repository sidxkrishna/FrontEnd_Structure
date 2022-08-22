import {
    Box,
    VStack,
    Text,
    Button,
} from '@chakra-ui/react';

export default function BookingCard(props) {
    return (
        <Box bg={'white'} justifyContent={'space-between'} display={'flex'} flexDir={'row'} w={'100%'} p="4" boxShadow="lg" borderRadius="md">
            <VStack fontWeight={'semibold'} fontSize={'xl'} alignItems={'flex-start'}>
                <Text >{props.time}</Text>
                <Text>{props.date}</Text>
            </VStack>
            <VStack fontWeight={'semibold'} fontSize={'xl'} alignItems={'flex-end'}>
                <Text>{props.location}</Text>
                <Button size={'sm'} colorScheme={'red'}>Cancel</Button>
            </VStack>
        </Box>
    );
}