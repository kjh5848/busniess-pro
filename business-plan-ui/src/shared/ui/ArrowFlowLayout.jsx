import React from 'react';

/**
 * ArrowFlowLayout
 *
 * 단계를 화살표(→)로 연결하는 순차 흐름 다이어그램 컴포넌트입니다.
 * 이미지의 "초기 레퍼런스 확보 → 국내 B2B 실증 → ..." 패턴을 구현합니다.
 *
 * @param {Object[]} steps - 단계 데이터 배열
 *   @param {string} steps[].label - 단계 제목 (굵은 텍스트)
 *   @param {string} [steps[].sub] - 단계 보조 설명 (작은 텍스트)
 * @param {string}  [accentColor="#dfe6f7"] - 박스 배경 강조색
 * @param {boolean} [wrap=false]  - 줄바꿈 허용 여부
 *
 * 사용 예시:
 * <ArrowFlowLayout
 *   steps={[
 *     { label: '초기 레퍼런스 확보', sub: '(대학/연구소 무상 배포)' },
 *     { label: '국내 B2B 실증',      sub: '(바이오 벤처 유료화)' },
 *     { label: '아시아/중견 확장',    sub: '(클라우드 서비스(웹) 구독 모델 확산)' },
 *     { label: '글로벌 스케일업',     sub: '(Big Pharma 파트너십)' },
 *   ]}
 * />
 */
const ArrowFlowLayout = ({
  steps = [],
  accentColor = '#dfe6f7',
  wrap = false,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        gap: '0.5rem',
        padding: '1.2rem 0',
      }}
    >
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          {/* 단계 박스 */}
          <div
            style={{
              border: '1.5px solid #333',
              padding: '0.9rem 1.2rem',
              textAlign: 'center',
              minWidth: '140px',
              backgroundColor: '#fff',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '1rem',
                lineHeight: 1.4,
                wordBreak: 'keep-all',
              }}
            >
              {step.label}
            </div>
            {step.sub && (
              <div
                style={{
                  fontSize: '0.88rem',
                  color: '#555',
                  marginTop: '0.3rem',
                  lineHeight: 1.3,
                  wordBreak: 'keep-all',
                }}
              >
                {step.sub}
              </div>
            )}
          </div>

          {/* 화살표 (마지막 단계 뒤에는 표시 안 함) */}
          {i < steps.length - 1 && (
            <div
              style={{
                fontSize: '1.5rem',
                color: '#333',
                fontWeight: 'bold',
                flexShrink: 0,
                padding: '0 0.15rem',
                userSelect: 'none',
              }}
            >
              →
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ArrowFlowLayout;
