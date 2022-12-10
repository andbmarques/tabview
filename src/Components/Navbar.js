import React, { useRef } from "react";
import {
    Flex,
    Heading,
    Text,
    Icon,
    Stack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react';
import { Bird, List, Plus, MagnifyingGlass, Money, Coin } from 'phosphor-react';
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef()
    const borderColor = useColorModeValue('red.500', 'gray.700')

    return (
        <Flex>
            <Heading
                borderBottomWidth='medium'
                borderBottomColor={borderColor}
                width='100%'
                paddingY='3'
                paddingX='5'
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='space-between'
            >
                <Flex>
                    <Stack direction='row' alignItems='center' spacing='2' as={Link} to='/' >
                        <Icon
                            as={Bird}
                            color='red.500'
                            w={8}
                            h={8}
                        />
                        <Text fontSize='xl' >Tabview</Text>
                    </Stack>
                </Flex>
                <Stack>
                    <InputGroup>
                        <Input variant='filled' placeholder='Pesquisar' focusBorderColor='transparent' />
                        <InputRightElement >
                            <IconButton
                                size='md'
                                fontSize='lg'
                                aria-label='Pesquisar'
                                variant='solid'
                                icon={<MagnifyingGlass />}
                            />
                        </InputRightElement>
                    </InputGroup>
                </Stack>
                <Stack direction='row' >
                    <Stack direction='row' alignItems='center' mx='5' spacing='5'>
                        <Stack direction='row' alignItems='center'>
                            <Icon
                                as={Coin}
                                fontSize='md'
                                color='blue.500'
                            />
                            <Text fontSize='md' fontWeight='semibold' >0</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center'>
                            <Icon
                                as={Money}
                                fontSize='md'
                                color='green.500'
                            />
                            <Text fontSize='md' fontWeight='semibold' >0</Text>
                        </Stack>
                    </Stack>
                    <IconButton
                        size='md'
                        fontSize='lg'
                        aria-label={`Criar tab`}
                        variant="ghost"
                        color="current"
                        marginLeft="2"
                        onClick={() => { }}
                        icon={<Plus weight='bold' />}
                    />
                    <IconButton
                        size='md'
                        fontSize='lg'
                        aria-label={`Abrir menu`}
                        variant="ghost"
                        color="current"
                        marginLeft="2"
                        onClick={onOpen}
                        icon={<List weight='bold' />}
                        ref={btnRef}
                    />
                </Stack>
            </Heading>
            <Sidebar isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
        </Flex>
    )
}

export default Navbar;