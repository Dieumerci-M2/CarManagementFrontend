import { Input } from 'antd';
import React, { useContext, useEffect, useState } from "react";
import '../App.css';
import Document from "../components/Document";
import { UserDocumentInfo } from "../@types/global"
import { DocContext } from '../Context/Context';

const UserDocument = () => {
  // Search data
  const [searchData, setSearchData] = useState<UserDocumentInfo[]>([])
  const { user } = useContext(DocContext)
    console.log(user.token)
  const { Search } = Input;
  const onSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    fetch(`https://carmanagementbackend-production.up.railway.app/document/findAll?plaque=${e.target.value}`, {
      headers: {
        Authorization: `Bearer ${user.token}` ,
        mode: "cors"
      }
    }).then(res => res.json())
      .then(({ data }:{data:UserDocumentInfo[]}) => {
        setSearchData(data ?? [])
        console.log(searchData)
      })
      .catch(console.error)
  };

  // Preview Data
  const [previewData, setPreviewData] = useState<UserDocumentInfo[]>([]);
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
          previewData.map(data => <Document key={data.id} data={data} />)
        }
      </section>
    </article>
  )
}

export default UserDocument
