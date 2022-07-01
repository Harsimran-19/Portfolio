import React from 'react';

const Works=[
  {
    Title:'Decentralized Social Media App',
    Description:'fsdfsdfsdfsd',
    imgLink:'../Img/Snip.jpg',
    DemoLink:'',
    CodeLink:''
  },
  
]
const Work = () => {
  return (
    <div name='work' className='w-full pt-40 pb-40 text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>

        </div>
        


        {/* snip */}
          <div className="div flex flex-col mt-32 md:flex-row md:height-auto rounded-lg shadow-md shadow-[#040c16]">
      <img class=" w-full  md:h-auto object-cover md:w-96 rounded-t-lg md:rounded-none md:rounded-l-lg" src={require('../Img/Snip.jpg')} alt="" />
      
        <div className="p-6 flex flex-col justify-between">
        <h5 className=" text-xl font-medium mb-2">Decentralized Social Media App</h5>
        <p className=" text-base mb-4">
         Snip is a decentralized social media application built with React and MoralisDb.
         The Smart Contract is deployed on Mumbai testnet network,the app is completly decentralized using ethereum blockchain,Feel free to post anything you like.
         (Note: Requires an Ethereum wallet)
        </p>
        <div className="div flex items-center justify-center ">
          <a href="https://snip-ee9c4.firebaseapp.com"  target="_blank"><button className='button mx-3 rounded-lg border-2 hover:bg-pink-600 hover:border-pink-600 px-5 py-2'>Demo</button></a>
          <a href="https://github.com/Harsimran-19/Snip" target="_blank"><button className='button mx-3 rounded-lg border-2 hover:bg-pink-600 hover:border-pink-600 px-5 py-2'>Code</button></a>
          {/* <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button> */}
        </div>
      </div>
      
      </div>



{/* iPod */}

      <div className="div flex flex-col mt-32 md:flex-row md:height-auto rounded-lg shadow-md shadow-[#040c16]">
      <img class=" w-full  md:h-auto object-cover md:w-96 rounded-t-lg md:rounded-none md:rounded-l-lg" src={require('../Img/iPod.jpg')} alt="" />
      
        <div className="p-6 flex flex-col justify-between">
        <h5 className=" text-xl font-medium mb-2">iPod </h5>
        <p className=" text-base mb-4">
        This is an iPod clone made with React and Zingtouch Library,The iPod can play and pause music and has same touch wheel as the original iPod
        </p>
        <div className="div flex items-center justify-center ">
          <a href="https://ipod-1cb15.firebaseapp.com"  target="_blank"><button className='button mx-3 rounded-lg border-2 hover:bg-pink-600 hover:border-pink-600 px-5 py-2'>Demo</button></a>
          <a href="https://github.com/Harsimran-19/iPod" target="_blank"><button className='button mx-3 rounded-lg border-2 hover:bg-pink-600 hover:border-pink-600 px-5 py-2'>Code</button></a>
          {/* <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button> */}
        </div>
      </div>
      
      </div>

{/* DizzyDots */}

      <div className="div flex flex-col mt-32 md:flex-row md:height-auto rounded-lg shadow-md shadow-[#040c16]">
      <img class=" w-full  md:h-auto object-cover md:w-96 rounded-t-lg md:rounded-none md:rounded-l-lg" src={require('../Img/DIzzyDots.jpg')} alt="" />
      
        <div className="p-6 flex flex-col justify-between">
        <h5 className=" text-xl font-medium mb-2">Landing Page for a NFT marketplace</h5>
        <p className=" text-base mb-4">
         This is a Landing page for a NFT marketplace known as DizzyDots the page is made using React and Tailwind Css.
        </p>
        <div className="div flex items-center justify-center ">
          <a href="https://dizzydots-790b1.firebaseapp.com"  target="_blank"><button className='button mx-3 rounded-lg border-2 hover:bg-pink-600 hover:border-pink-600 px-5 py-2'>Demo</button></a>
          <a href="https://github.com/Harsimran-19/Dizzydots" target="_blank"><button className='button mx-3 rounded-lg border-2 hover:bg-pink-600 hover:border-pink-600 px-5 py-2'>Code</button></a>
          {/* <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button> */}
        </div>
      </div>
      
      </div>

{/* Incode */}

      <div className="div flex flex-col mt-32 md:flex-row md:height-auto rounded-lg shadow-md shadow-[#040c16]">
      <img class=" w-full  md:h-auto object-cover md:w-96 rounded-t-lg md:rounded-none md:rounded-l-lg" src={require('../Img/Incode.jpg')} alt="" />
      
        <div className="p-6 flex flex-col justify-between">
        <h5 className=" text-xl font-medium mb-2">Live Code Editor using React</h5>
        <p className=" text-base mb-4">
        This is a Live code Editor named Incode which can use html,css and javascript and store the data on local device of the user.Incode is made with React and Codemirror and data is stored using useLocalStorage Hook.
        </p>
        <div className="div flex items-center justify-center ">
          <a href="https://gleeful-naiad-29c425.netlify.app"  target="_blank"><button className='button mx-3 rounded-lg border-2 hover:bg-pink-600 hover:border-pink-600 px-5 py-2'>Demo</button></a>
          <a href="https://github.com/Harsimran-19/Incode" target="_blank"><button className='button mx-3 rounded-lg border-2 hover:bg-pink-600 hover:border-pink-600 px-5 py-2'>Code</button></a>
          {/* <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button> */}
        </div>
      </div>
      
      </div>
      
</div>
    </div>
  );
};

export default Work;