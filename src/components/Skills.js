import React from 'react';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-10' src={"https://cdn-icons-png.flaticon.com/512/732/732212.png"} alt="HTML icon" />
                  <p className='my-4 text-2xl'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-10' src={"https://cdn-icons-png.flaticon.com/512/732/732190.png"} alt="HTML icon" />
                  <p className='my-4 text-2xl'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-40 mx-auto mt-8' src={"https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"} alt="HTML icon" />
                  <p className='my-4 text-2xl'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-10' src={"https://www.obg.eu.com/img/technologies/react.png"} alt="HTML icon" />
                  <p className='my-4 text-2xl'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-24 mx-auto mt-10 ' src={"https://camo.githubusercontent.com/bec2c92468d081617cb3145a8f3d8103e268bca400f6169c3a68dc66e05c971e/68747470733a2f2f76352e676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"} alt="HTML icon" />
                  <p className='my-4 text-2xl'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-24 mx-auto mt-12 mb-7' src={"https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"} alt="HTML icon" />
                  <p className='my-4 text-2xl'>TAILWIND CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-24 mx-auto mt-12 mb-7' src={"https://img.icons8.com/office/80/000000/express-js.png"} alt="HTML icon" />
                  <p className='my-4 text-2xl'>ExpressJs</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-24 mx-auto mt-12 mb-7' src={"https://img.icons8.com/color/96/000000/mongodb.png"} alt="HTML icon" />
                  <p className='my-4 text-2xl'>MongoDB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-24 mx-auto mt-12 mb-7' src={"https://img.icons8.com/color/96/000000/figma--v1.png"} alt="HTML icon" />
                  <p className='my-4 text-2xl'>Figma</p>
              </div>
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={""} alt="HTML icon" />
                  <p className='my-4'></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={""} alt="HTML icon" />
                  <p className='my-4'>AWS</p>
              </div> */}
          </div>
      </div>
    </div>
  );
};

export default Skills;
