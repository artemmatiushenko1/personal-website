import { useRef, useState } from 'react';
import * as S from './Upload.style';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { postArtwork } from 'redux/slices/artworksSlice';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from 'redux/selectors/artworks';
import { Spinner } from 'components/spinner';

const options = [
  { value: 'art', label: 'art' },
  { value: 'portrait', label: 'portrait' },
  { value: 'nature', label: 'nature' },
  { value: 'food', label: 'food' },
];

const readURL = (file) => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = (e) => res(e.target.result);
    reader.onerror = (e) => rej(e);
    reader.readAsDataURL(file);
  });
};

const Upload = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState(new Date().getFullYear());
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState();
  const [src, setSrc] = useState('');
  const fileInputRef = useRef();
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  const onFileChangeHandler = async (e) => {
    setFile(e.target.files[0]);

    const url = await readURL(e.target.files[0]);
    setSrc(url);
  };

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onYearChangeHandler = (e) => {
    setYear(e.target.value);
  };

  const onCategoriesHandler = (value) => {
    setCategories(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      postArtwork({
        file,
        name,
        year,
        categories: categories.map((category) => category.value),
      })
    );

    fileInputRef.current.value = '';
    setFile(null);
    setName('');
    setCategories([]);
  };

  return (
    <S.Section>
      <S.Form onSubmit={onSubmit}>
        <input
          ref={fileInputRef}
          type="file"
          placeholder="file"
          style={{ color: '#fff' }}
          onChange={onFileChangeHandler}
        />
        <S.Input
          type="text"
          placeholder="name"
          value={name}
          onChange={onNameChangeHandler}
        />
        <S.Input
          type="number"
          placeholder="year"
          value={year}
          onChange={onYearChangeHandler}
        />
        <Select
          isMulti
          name="categories"
          placeholder="Categories"
          value={categories}
          onChange={onCategoriesHandler}
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <S.SubmitButton type="submit">Submit</S.SubmitButton>
      </S.Form>
      <div style={{ width: '400px', height: 'auto' }}>
        <img
          src={src}
          alt=""
          width="100%"
          height="100%"
          style={{ objectFit: 'contain' }}
        />
      </div>
      {isLoading && <Spinner />}
    </S.Section>
  );
};

export default Upload;
