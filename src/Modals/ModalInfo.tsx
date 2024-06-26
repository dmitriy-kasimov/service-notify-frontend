import { FC, useState } from 'react';
import { Modal, VStack, Text, Button } from '@tr271v0r/ui-tool-kit';

type ModalInfoType = {
    title: string;
    body: string;
};

export const ModalInfo: FC = () => {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState<ModalInfoType>({
        title: '',
        body: '',
    });

    if ('alt' in window) {
        alt.on('c:f:showModalInfo', (title: string, body: string) => {
            setContent({
                title,
                body,
            });
            setShow(true);
        });
    }

    const handleClose = () => {
        setShow(false);
    };

    return (
        <Modal isOpen={show} onClose={handleClose} lazy>
            <VStack max align={'center'} justify={'between'} gap={'xl'}>
                <Text>{content.title}</Text>
                <Text>{content.body}</Text>
                <Button fullWidth onClick={handleClose}>
                    <Text size={'l'}>Ok</Text>
                </Button>
            </VStack>
        </Modal>
    );
};
