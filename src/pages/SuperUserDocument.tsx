import Document from "../components/Document"
import { Input, Space } from 'antd';
import '../App.css'

const SuperUserDocument = () => {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  return (
   <article>
      <section className="flex justify-center items-center gap-2 my-14">
        <div>
          <Space direction="vertical">
           <Search placeholder="input search text" onSearch={onSearch} className="w-96" />
          </Space>
        </div>
        <div>
          <select name="cars" id="car">
            <option value="plaque">Plaque</option>
            <option value="dog">Nom Prop</option>
            <option value="cat">Marque</option>
          </select>
        </div>
      </section>
      <section>
          <Document />
      </section>
    </article>
  )
}

export default SuperUserDocument
