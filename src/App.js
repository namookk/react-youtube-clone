import './App.css';
import youtubeData from './data/youtubeData.json';

function App() {
  const data = youtubeData.data[0];
  const keys = Object.keys(data);
  const desc = {
    "category" : "영상의 카테고리",
    "channelId" : "채널의 고유값",
    "channelThumbnail" : "채널 썸네일 이미지 주소",
    "channelTitle" : "채널 타이틀",
    "channelUrl" : "채널 Url Id값",
    "date" : "업로드 날짜 및 시간",
    "description" : "동영상 설명문구",
    "id" : "동영상 고유값",
    "likeCount" : "동영상 좋아요 수",
    "thumbnail" : "동영상 썸네일",
    "title" : "동영상 타이틀",
    "viewCount" : "동영상 조회 수"
  }
  for(const key of keys){
    console.log(key +" : " + data[key] + " -> "+desc[key]);
  }
  return (
    <div>시작</div>
  );
}

export default App;
