import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, Text, Stack, Avatar, DrawerFooter, Button } from '@chakra-ui/react';
import { Bird, SignOut, House, Notebook, BookmarkSimple, User  } from 'phosphor-react';
import { ColorModeSwitcher } from '../Utils/ColorModeSwitcher';
import { Link as RouterLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, btnRef }) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    <Stack direction='row' alignItems='center' >
                        <Icon
                            as={Bird}
                            color='red.500'
                        />
                        <Text>Tabview</Text>
                    </Stack>
                </DrawerHeader>
                <DrawerBody>
                    <Stack alignItems='center' h='250' mt='5' spacing={5} >
                        <Avatar name='andbmarques' size='xl' />
                        <Text fontWeight='semibold' >Anderson Barbosa</Text>
                    </Stack>
                    <Stack h='200' mt='-70'>
                        <Button
                            as={RouterLink}
                            to='/'
                        >
                            <Icon
                                as={House}
                                color='red.500'
                                weight='fill'
                            />
                            <Text mx='2'>Home</Text>
                        </Button>
                        <Button
                            as={RouterLink}
                            to='/notes'
                        >
                            <Icon
                                as={BookmarkSimple}
                                color='red.500'
                                weight='fill'
                            />
                            <Text mx='2'>Salvos</Text>
                        </Button>
                        <Button
                            as={RouterLink}
                            to='/projects'
                        >
                            <Icon
                                as={Notebook}
                                color='red.500'
                                weight='fill'
                            />
                            <Text mx='2'>Minhas Tabs</Text>
                        </Button>
                        <Button
                            as={RouterLink}
                            to='/projects'
                        >
                            <Icon
                                as={User}
                                color='red.500'
                                weight='fill'
                            />
                            <Text mx='2'>Perfil</Text>
                        </Button>
                    </Stack>
                </DrawerBody>
                <DrawerFooter>
                    <Stack alignItems='center' direction='row' spacing='3' >
                        <ColorModeSwitcher />
                        <Button bgColor='red.600' >
                            <SignOut weight='bold' color='white' />
                            <Text mx='2' color='white' >Sair</Text>
                        </Button>
                    </Stack>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default Sidebar;