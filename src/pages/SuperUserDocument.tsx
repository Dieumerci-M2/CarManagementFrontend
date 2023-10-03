//Call input from antDesign CSS library
import { Input } from 'antd';
// Call Hooks
import React, { useContext, useEffect, useState } from "react";
// Call vanilla CSS file
import '../App.css';
// Call Super user Document from Component directory
import SuperDoc from '../components/SuperDoc';
// Call Document info from global.d.ts
import { UserDocumentInfo } from "../@types/global"
// Call Document Context from Context file
import { DocContext } from '../Context/Context';
/**
 * Define Pages's name
 */
const SuperUserDocument = () => {
   // Initialize States
  const [searchData, setSearchData] = useState<UserDocumentInfo[]>([])
  const { user } = useContext(DocContext)
    console.log(user.token)
  const { Search } = Input;
  // Define a function to get Documents by these plaque names
  const onSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    /**
     *  Use Fetch AJAX synthax to Get Document
     * The first argument is the URL to find ressources
     * The second is the Object that contain the headers of the request whitch is also another object
     * The headers Object contain the Authorisation as key and the mode of data transmission
     *  */
    fetch(`https://carmanagementbackend-production.up.railway.app/document/findAll?plaque=${e.target.value}`, {
      headers: {
        Authorization: `Bearer ${user.token}` ,
        mode: "cors"
      }
    })
      /**
       * If all are going well the return the response on promise
       * and convert that response on Json file whitch can be read and manipulate easily
       */
      .then(res => res.json())
      /**
       * After convert the reponse, we specify the type of Income Data as
       * an empty array of UserDocumentInfo interface
       * We stock Data on setSearchData state
       */
      .then(({ data }:{data:UserDocumentInfo[]}) => {
        setSearchData(data ?? [])
        console.log(searchData)
      })
      /**
       * If something going wrong then catch the Error
       */
      .catch(console.error)
  };

  /**
   * Initialize a State and give it type to stock Previews Data
   */
  const [previewData, setPreviewData] = useState<UserDocumentInfo[]>([]);
  /**
   * Fetch Data on UseEffect to Update the income data everytime the application rerendering
   * Instead of showing all the Data, we use a Slice Javascript's method to take just height elements
   * Which will be showing to the user
   */
  useEffect(() => {
    fetch("https://carmanagementbackend-production.up.railway.app/document/findAll", {
      headers: {
        Authorization: `Bearer ${user.token}`,
        mode: "cors"
      }

    }).then(res => res.json())
      .then(({ data }:{data:UserDocumentInfo[]}) => {
        setPreviewData(data.slice(0,7))
      })
      .catch(console.error)
  }, [])
  
  return (
    <article>
      <section className="flex justify-center items-center gap-2 my-10">
        <div className="relative">
          <Search placeholder="input search text" onChange={onSearch} className="w-96" />
          {
            searchData.length === 0
              ? <></>
            : <ul className="p-4 absolute top-8 left-0 right-0 border-2 border-t-0 flex flex-col gap-2">
                {searchData.map(item => <li key={item.id} className=''>{item.plaque}</li>)}
              </ul>
          }
        </div>
        <div>
          <select name="cars" id="car">
            <option value="plaque">Plaque</option>
            <option value="dog">Nom Prop</option>
            <option value="cat">Marque</option>
          </select>
        </div>
      </section>
      <section className='flex flex-wrap mx-20 gap-16 justify-between'>
        {
          previewData.map(data => <SuperDoc key={data.id} data={data} />)
        }
      </section>
    </article>
  )
}

export default SuperUserDocument
