import { useEffect } from 'react';
import useAnimatedList from '../../../hooks/useAnimatedList';
import { toastEventManager } from '../../../utils/toast';
import { ToastMessage } from '../ToastMessage';

import { Container } from './styles';

export function ToastContainer() {
  const {
    items: messages,
    setItems: setMessages,
    pendingRemovalItemsIds: pendingRemovalMessagesIds,
    handleRemoveItem: handleRemoveMessage,
    handleAnimationEnd,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(), type, text, duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, [setMessages]);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
          isLeaving={pendingRemovalMessagesIds.includes(message.id)}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
}
