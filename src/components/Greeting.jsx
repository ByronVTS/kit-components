import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class='m-5 p-4 w-96 border'>
      <h3>{greeting} ¡Gracias por tu visita!</h3>
      <button class='border m-3 p-2 shadow-lg rounded-lg' onClick={() => setGreeting(randomMessage())}>
        Nuevo saludo
      </button>
    </div>
  );
}