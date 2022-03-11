import { useState } from 'react';
import * as S from './Upload.style';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { postArtwork } from 'redux/slices/artworksSlice';

const options = [
  { value: 'art', label: 'art' },
  { value: 'portrait', label: 'portrait' },
  { value: 'nature', label: 'nature' },
  { value: 'food', label: 'food' },
];

const Upload = () => {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState();
  const dispatch = useDispatch();

  const onFileChangeHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onCategoriesHandler = (value) => {
    setCategories(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      postArtwork({
        file,
        name,
        categories: categories.map((category) => category.value),
      })
    );

    setFile(null);
    setName('');
    setCategories([]);
  };

  return (
    <S.Section>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          placeholder="file"
          style={{ color: '#fff' }}
          onChange={onFileChangeHandler}
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={onNameChangeHandler}
        />
        <Select
          isMulti
          name="categories"
          value={categories}
          onChange={onCategoriesHandler}
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <button type="submit">Submit</button>
      </form>
    </S.Section>
  );
};

export default Upload;
