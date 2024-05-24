

// // import {
// //   ChatEngine,
// //   MultiChatSocket,
// //   useMultiChatLogic,
// // } from 'react-chat-engine-advanced';

// // const ChatsPage = () => {
// //   const ChatProps= useMultiChatLogic('49be6132-5217-4baa-99eb-6f19d5f41061  ',props.user.username,props.user.secret)
// //     return <div style={{height:100vh}}>

// //       <MultiChatSocket{...ChatProps}/>
// //       <MultiChatWindow{...ChatProps}  style={{height:100%}}/>

// //     </div>;
// //   };
// //   export default ChatsPage;
// import React from 'react';
// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic
// } from 'react-chat-engine-advanced';

// const ChatsPage = (props) => {
//   const ChatProps = useMultiChatLogic('49be6132-5217-4baa-99eb-6f19d5f41061', props.user.username, props.user.secret);

//   return (
//     <div style={{ height: '100vh' }}>
//       <MultiChatSocket {...ChatProps} />
//       <MultiChatWindow {...ChatProps} style={{ height: '100%' }} />
//     </div>
//   );
// };

// export default ChatsPage;
// ChatsPage.jsx
// import React from 'react';
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

// const ChatsPage = (props) => {
//   const ChatProps = useMultiChatLogic('49be6132-5217-4baa-99eb-6f19d5f41061', props.user.username, props.user.secret);

//   return (
//     <div style={{ height: '100vh' }}>
//       <MultiChatSocket {...ChatProps} />
//       <MultiChatWindow {...ChatProps} style={{ height: '100%' }} />
//     </div>
//   );
// };

// export default ChatsPage;
import React from 'react';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '49be6132-5217-4baa-99eb-6f19d5f41061',
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  );
};

export default ChatsPage;
