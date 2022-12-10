import { Stack, Text, useColorModeValue, Icon, Divider, MenuButton, IconButton, Menu, MenuList, MenuItem } from '@chakra-ui/react';
import { Coin, ChatDots, User, Clock, List, Star, CaretUp, CaretDown } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://www.tabnews.com.br/api/v1';

export default function Home() {

    const [data, setData] = useState(null);
    const [order, setOrder] = useState({
        status: 'Relevantes',
        codes: {
            'Relevantes': 'relevant',
            'Recentes': 'new',
            'Antigos': 'old'
        }
    })

    const IconSelector = ({ status }) => {
        if (status === 'Relevantes') {
            return <Icon as={Star} weight='fill' color='red.500' />
        } else if (status === 'Recentes') {
            return <Icon as={CaretDown} weight='fill' color='red.500' />
        } else if (status === 'Antigos') {
            return <Icon as={CaretUp} weight='fill' color='red.500' />
        }
    }

    const listBgColor = useColorModeValue('gray.100', 'gray.700');

    useEffect(() => {
        axios.get(`${BASE_URL}/contents?per_page=15&strategy=${order.codes[order.status]}`)
            .then((response) => setData(response.data))
    }, [order.status, order.codes]);

    return (
        <Stack direction='column' spacing={5}>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Stack direction='row' alignItems='center'>
                    <IconSelector status={order.status} />
                    <Text fontWeight='semibold' fontSize='2xl' >
                        {order.status}
                    </Text>
                </Stack>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Ordenar'
                        icon={<List />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem onClick={() => setOrder({ ...order, status: 'Relevantes' })} icon={<Star weight='fill' />} >
                            Relevantes
                        </MenuItem>
                        <MenuItem onClick={() => setOrder({ ...order, status: 'Recentes' })} icon={<CaretDown weight='fill' />} >
                            Recentes
                        </MenuItem>
                        <MenuItem onClick={() => setOrder({ ...order, status: 'Antigos' })} icon={<CaretUp weight='fill' />} >
                            Antigos
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Stack>
            <Divider />
            <Stack h='max' w='5xl'>
                {
                    data && data.map((item, i) => (
                        <Stack
                            py='5'
                            px='5'
                            borderRadius='md'
                            borderLeftWidth='thick'
                            borderLeftColor='red.500'
                            bgColor={listBgColor}
                            cursor='pointer'
                            _hover={{ backgroundColor: 'rgba(0,0,0, 0.1)' }}
                            key={item.id}
                            as={Link}
                            to={`/${item.owner_username}/${item.slug}`}
                        >
                            <Text fontWeight='semibold' >{item.title}</Text>
                            <Stack direction='row' alignItems='center' spacing={4} >
                                <Stack direction='row' alignItems='center'>
                                    <Icon
                                        as={Coin}
                                        fontSize='sm'
                                        color='red.500'
                                    />
                                    <Text fontSize='sm' fontWeight='semibold' >{item.tabcoins}</Text>
                                </Stack>
                                <Stack direction='row' alignItems='center'>
                                    <Icon
                                        as={ChatDots}
                                        fontSize='sm'
                                        color='red.500'
                                    />
                                    <Text fontSize='sm' fontWeight='semibold' >{item.children_deep_count}</Text>
                                </Stack>
                                <Stack direction='row' alignItems='center'>
                                    <Icon
                                        as={User}
                                        fontSize='sm'
                                        color='red.500'
                                    />
                                    <Text fontSize='sm' fontWeight='semibold' >{item.owner_username}</Text>
                                </Stack>
                                <Stack direction='row' alignItems='center'>
                                    <Icon
                                        as={Clock}
                                        fontSize='sm'
                                        color='red.500'
                                    />
                                    <Text fontSize='sm' fontWeight='semibold' >{item.published_at}</Text>
                                </Stack>
                            </Stack>
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    );
}