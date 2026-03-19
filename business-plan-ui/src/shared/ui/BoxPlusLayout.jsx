import React from 'react';

/**
 * BoxPlusLayout
 *
 * 여러 개의 박스를 "+" 기호로 연결하는 레이아웃 컴포넌트입니다.
 * 이미지의 "클라우드 서비스(웹) 구독 + On-Demand 연산 + Enterprise API" 패턴을 구현합니다.
 *
 * @param {Object[]} items - 박스 데이터 배열
 *   @param {string} items[].title   - 박스 상단 제목 (헤더 영역)
 *   @param {string} items[].main    - 박스 중앙 강조 텍스트 (굵게)
 *   @param {string} items[].sub     - 박스 하단 보조 설명 텍스트
 * @param {string}  [operator="+"]  - 박스 사이 연산자 기호 (기본값: "+")
 * @param {string}  [accentColor="#dfe6f7"] - 헤더 배경색
 *
 * 사용 예시:
 * <BoxPlusLayout
 *   items={[
 *     { title: '클라우드 서비스(웹) 구독 (Main)', main: '월 요금', sub: '초기 스타트업/연구소 타겟' },
 *     { title: 'On-Demand 연산', main: 'GPU 시간당 과금', sub: '대규모 시뮬레이션 수행 시' },
 *     { title: 'Enterprise API', main: '연간 라이선스 계약', sub: '보안/커스텀이 필요한 대기업' },
 *   ]}
 * />
 */
const BoxPlusLayout = ({
  items = [],
  operator = '+',
  accentColor = '#dfe6f7',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.2rem',
        padding: '1.5rem 0',
        flexWrap: 'wrap',
      }}
    >
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {/* 박스 */}
          <div
            style={{
              border: '1.5px solid #333',
              minWidth: '200px',
              maxWidth: '280px',
              flex: '1 1 200px',
              textAlign: 'center',
              fontFamily: 'inherit',
            }}
          >
            {/* 헤더 */}
            <div
              style={{
                backgroundColor: accentColor,
                padding: '0.65rem 1rem',
                borderBottom: '1.5px solid #333',
                fontWeight: 'bold',
                fontSize: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              {item.title}
            </div>

            {/* 본문 */}
            <div style={{ padding: '0.85rem 1rem 1rem' }}>
              <div
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  marginBottom: '0.4rem',
                  lineHeight: 1.4,
                }}
              >
                {item.main}
              </div>
              {item.sub && (
                <div
                  style={{
                    fontSize: '0.88rem',
                    color: '#555',
                    lineHeight: 1.4,
                  }}
                >
                  {item.sub}
                </div>
              )}
            </div>
          </div>

          {/* 연산자 (마지막 박스 뒤에는 표시 안 함) */}
          {i < items.length - 1 && (
            <div
              style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#333',
                flexShrink: 0,
                userSelect: 'none',
              }}
            >
              {operator}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoxPlusLayout;
