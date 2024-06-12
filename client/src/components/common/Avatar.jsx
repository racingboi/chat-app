import React, {useEffect} from "react";
import Image from "next/image";
import {FaCamera} from "react-icons/fa";
import ContextMenu from "@/components/common/ContextMenu";
import PhotoPicker from "@/components/common/PhotoPicker";

function Avatar({type,image, setImage}) {

    const [hover, setHover] = React.useState(false);

    const [isContextMenuVisible, setIsContextMenuVisible] = React.useState(false);

        const [contextMenuCordinates, setContextMenuCordinates] = React.useState({ x: 0, y: 0 });

        const [grabPhoto, setGrabPhoto] = React.useState(false);

        const showContextMenu = (e) => {
            e.preventDefault()
            setIsContextMenuVisible(true)
            setContextMenuCordinates({ x: e.pageX, y: e.pageY })
        }

        const contextMenuOptions =
            [
                {name: "Take Photo", callback: () => {}},
                {name: "Change Form Library", callback: () => {}},
                {name: "Update Photo", callback: () => {setGrabPhoto(true)}},
                {name: "Remove Photo", callback: () => {setImage("/default_avatar.png")}}

            ]

    const photoPickerChange = async (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        const data = document.createEvent("img");
        reader.onload = (event) => {
            data.src = event.target.result;
            data.setAttribute("data-src", event.target.result);
            reader.readAsDataURL(file);
           setTimeout(() => {
                setImage(data.src)
           },1000)
        }

    }

    useEffect(() => {
        if(grabPhoto){
          const data= document.getElementById("photo-picker");
            data.click();
            document.body.onfocus = (e) => {
                setTimeout(() => {
                    setGrabPhoto(false)
                }, 1000)
            }
        }
    }, [grabPhoto])
  return(
      <div className='flex items-center justify-center'>
          {
              type === "sm" &&(
              <div className='relative h-10 w-10'>
                  <Image src={image} alt='avatar' className='rounded-full' fill/>

              </div>
          )}
          {
                type === "lg" &&(
                <div className='relative h-14 w-14'>
                    <Image src={image} alt='avatar' className='rounded-full' fill/>
                </div>
            )}
          {
              type === "xl" &&(
                  <div className="relative cursor-pointer z-0"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}

                  >
                      <div className={`z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col gap-2
                      ${hover ? "visible" : "hidden"}
                      `}
                           onClick={e=>showContextMenu(e)}
                           id="context-opener"
                      >
                          <FaCamera onClick={e=>showContextMenu(e)} className='text-2xl' id="context-opener"/>
                            <span id="context-opener" onClick={e=>showContextMenu(e)}>Change <br/> Profile <br/> Photo</span>
                      </div>
                      <div className='h-60 w-60 flex items-center justify-center'>
                          <Image src={image} alt='avatar' className='rounded-full' fill/>
                      </div>
                  </div>
              )}
              {
                  isContextMenuVisible && (
                    <ContextMenu
                        options={contextMenuOptions}
                        cordinates={contextMenuCordinates}
                        contextMenu={isContextMenuVisible}
                        setContextMenu={setIsContextMenuVisible}
                    />
                  )
              }
          {
                grabPhoto && (
                   <PhotoPicker onChange={photoPickerChange}/>
                )
          }

      </div>
  );
}

export default Avatar;
