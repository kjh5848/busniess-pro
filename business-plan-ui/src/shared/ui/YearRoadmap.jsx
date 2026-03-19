import React from 'react';

/**
 * YearRoadmap
 *
 * 연도별 로드맵을 3열(또는 N열) 카드로 표시하는 컴포넌트입니다.
 * 이미지의 "1년차(도입기) / 2년차(성장기) / 3년차(도약기)" 패턴을 구현합니다.
 *
 * @param {Object[]} years - 연도 데이터 배열
 *   @param {string}   years[].year     - 연도 레이블 (ex. "1년차 (도입기)")
 *   @param {string}   years[].subtitle - 연도 부제목 (ex. "MVP 검증 및 초기 진입")
 *   @param {Object[]} years[].sections - 섹션 배열
 *     @param {string}   sections[].title   - 섹션 제목 (ex. "기술 고도화")
 *     @param {string[]} sections[].bullets - 불릿 리스트 항목들
 *     @param {string}   [sections[].note]  - 섹션 하단 소주석 (괄호 표기 등)
 *   @param {Object[]} [years[].footers] - 하단 요약 박스 배열
 *     @param {string}   footers[].title  - 박스 제목 (ex. "(비즈니스 모델)")
 *     @param {string[]} footers[].items  - 항목 리스트
 * @param {string} [accentColor="#dfe6f7"] - 연도 헤더 배경색
 *
 * 사용 예시:
 * <YearRoadmap
 *   years={[
 *     {
 *       year: '1년차 (도입기)',
 *       subtitle: 'MVP 검증 및 초기 진입',
 *       sections: [
 *         { title: '기술 고도화', bullets: ['AI 전하 예측 엔진 v1', '웹 시각화 에디터 구축'] },
 *         { title: '사업화',     bullets: ['국내 대학/연구소 베타 오픈', '초기 레퍼런스(논문 등) 확보'] },
 *       ],
 *       footers: [
 *         { title: '(비즈니스 모델)', items: ['Credit 기반 과금(GPU)', '클라우드 서비스(웹) Freemium (무료+유료)'] },
 *         { title: '(지식재산권)',    items: ['핵심 특허 1건 출원'] },
 *       ],
 *     },
 *     // ... 2년차, 3년차
 *   ]}
 * />
 */
const YearRoadmap = ({ years = [], accentColor = '#dfe6f7' }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${years.length}, 1fr)`,
        gap: '0',
        border: '1.5px solid #333',
        width: '100%',
      }}
    >
      {years.map((yr, yi) => (
        <div
          key={yi}
          style={{
            borderRight: yi < years.length - 1 ? '1.5px solid #333' : 'none',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* 연도 헤더 */}
          <div
            style={{
              backgroundColor: accentColor,
              padding: '0.5rem 0.75rem',
              borderBottom: '1.5px solid #333',
              textAlign: 'center',
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>
              {yr.year}
            </div>
            {yr.subtitle && (
              <div
                style={{
                  fontSize: '0.78rem',
                  color: '#555',
                  marginTop: '0.15rem',
                }}
              >
                {yr.subtitle}
              </div>
            )}
          </div>

          {/* 섹션들 */}
          <div style={{ flex: 1, padding: '0.6rem' }}>
            {(yr.sections || []).map((sec, si) => (
              <div key={si} style={{ marginBottom: si < yr.sections.length - 1 ? '0.75rem' : 0 }}>
                {/* 섹션 타이틀 */}
                <div
                  style={{
                    fontWeight: 'bold',
                    fontSize: '0.85rem',
                    textAlign: 'center',
                    border: '1px solid #333',
                    padding: '0.3rem 0.5rem',
                    marginBottom: '0.4rem',
                    backgroundColor: '#fff',
                  }}
                >
                  {sec.title}
                </div>

                {/* 섹션 이미지 (있을 경우) */}
                {sec.image && (
                  <div style={{ textAlign: 'center', marginBottom: '0.35rem' }}>
                    <img
                      src={sec.image}
                      alt={sec.title}
                      style={{ height: '70px', objectFit: 'contain' }}
                    />
                  </div>
                )}

                {/* 불릿 리스트 */}
                {(sec.bullets || []).length > 0 && (
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: '1.1rem',
                      fontSize: '0.8rem',
                      lineHeight: 1.6,
                      color: '#222',
                    }}
                  >
                    {sec.bullets.map((b, bi) => (
                      <li key={bi} style={{ wordBreak: 'keep-all' }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* 보조 note */}
                {sec.note && (
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: '#555',
                      marginTop: '0.2rem',
                      fontStyle: 'italic',
                    }}
                  >
                    {sec.note}
                  </div>
                )}

                {/* 섹션 사이 플러스 구분자 */}
                {si < yr.sections.length - 1 && (
                  <div
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      margin: '0.4rem 0 0',
                      color: '#555',
                    }}
                  >
                    +
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 하단 푸터 박스들 */}
          {(yr.footers || []).map((footer, fi) => (
            <div
              key={fi}
              style={{
                borderTop: '1.5px solid #333',
                padding: '0.5rem 0.6rem',
                fontSize: '0.8rem',
              }}
            >
              <div
                style={{
                  fontWeight: 'bold',
                  marginBottom: '0.25rem',
                  fontSize: '0.82rem',
                }}
              >
                {footer.title}
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.55 }}>
                {(footer.items || []).map((item, ii) => (
                  <li key={ii} style={{ wordBreak: 'keep-all' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default YearRoadmap;
