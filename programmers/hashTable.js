// 1. 같은 장르끼리 묶어야 합니다
// 2. 재생 순으로 정렬합니다
// 3. 2개씩 자릅니다

// 핵심 키워드 : 묶는 것, 정렬
// 매번 순회를 하면 무거워지기 때문에, 해시테이블을 이용하겠습니다.

// tip : 묶는 것은 해시 테이블과 관련이 있을 가능성이 큽니다.

function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });
  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}
