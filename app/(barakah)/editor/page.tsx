import EditorArea from './components/EditorArea';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

const Editor = () => {
  return (
    <div className='relative'>
      <Header />
      <div className='flex h-[calc(100vh-54px)] overflow-hidden'>
        <LeftPanel />
        <EditorArea />
        <RightPanel />
      </div>
    </div>
  );
};

export default Editor;
