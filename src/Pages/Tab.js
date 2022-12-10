import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Heading, Link, Stack, Text, Code } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BASE_URL = 'https://www.tabnews.com.br/api/v1';

export default function Tab() {

    const { slug, author } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}/contents/${author}/${slug}`)
            .then((response) => setData(response.data))
    });

    return (
        <Stack>
            {data && <Stack alignItems='left' px='20'>
                <Heading my='5' alignSelf='center' >{data.title}</Heading>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    children={data.body}
                    components={{
                        h1: 'h2',
                        h2: ({node, ...props}) => <Text fontSize='xl' borderBottom='1px' borderBottomColor='gray.500' py='2' fontWeight='bold' {...props}>{}</Text>,
                        a: ({node, ...props}) => <Link color='red.500' isExternal {...props} />,
                        code: ({node, ...props}) => <Code {...props}></Code>,
                        em: ({node, ...props}) => <Text as='i' {...props} />,
                    }}
                />
            </Stack>}

        </Stack>
    );
}