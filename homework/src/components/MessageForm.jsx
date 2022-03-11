import React, { useState } from "react";

function MessageForm() {
   const [message, setMessage] = useState;
   return (
      <div>
         <h2>Задание 3,4</h2>
         <div className='message-box'>

         </div>
         <form>
            <input type="text" />
            <input type="submit" value="Отправить"/>
         </form>
      </div>
   );
}

export default MessageForm;