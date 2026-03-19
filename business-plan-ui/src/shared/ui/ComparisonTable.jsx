import React from 'react';

/**
 * ComparisonTable
 *
 * 특정 열을 강조 표시하는 비교 테이블 컴포넌트입니다.
 * 이미지의 "기존 방식 / 단순 AI / 동사(Hybrid Engine)" 비교표 패턴을 구현합니다.
 * 강조 열(highlightCol)에는 #dfe6f7 배경과 상단 컬러 바를 적용합니다.
 *
 * @param {string[]}  headers        - 열 헤더 배열 (첫 번째는 행 레이블용)
 * @param {Object[]}  rows           - 행 데이터 배열
 *   @param {string}   rows[].label  - 행 제목 (첫 번째 열)
 *   @param {string[]} rows[].cells  - 나머지 열의 셀 값들
 * @param {number}    [highlightCol] - 강조할 열 인덱스 (0-based, headers 기준)
 *                                    예: highlightCol=2 이면 세 번째 열 강조
 * @param {string}    [accentColor="#dfe6f7"] - 강조 열 배경색
 * @param {string}    [barColor="#2c3e8c"]    - 강조 열 상단 컬러 바 색상
 *
 * 사용 예시:
 * <ComparisonTable
 *   headers={['구분', '기존 컴퓨터 시뮬레이션', '단순 AI 모델 (블랙박스(내부 구조 파악 불가))', '동사 (Hybrid Engine)']}
 *   rows={[
 *     { label: '핵심가치', cells: ['정밀도 중심', '속도 중심', '정밀도 + 속도 + 편의성'] },
 *     { label: '사용성',   cells: ['명령어(개발자용 명령어) 기반 복잡함', '블랙박스로 해석 난해', '웹 시각화 화면 (노코드(코딩 불필요))'] },
 *   ]}
 *   highlightCol={3}
 * />
 */
const ComparisonTable = ({
  headers = [],
  rows = [],
  highlightCol,
  accentColor = '#dfe6f7',
  barColor = '#2c3e8c',
}) => {
  // highlightCol은 headers 배열 기준 인덱스
  // headers[0]은 "구분" 같은 레이블 열이므로, 실제 데이터 col 인덱스 = highlightCol - 1
  const isHighlight = (colIdx) => colIdx === highlightCol;

  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '0.85rem',
        tableLayout: 'fixed',
      }}
    >
      <thead>
        <tr>
          {headers.map((header, hi) => {
            const highlight = isHighlight(hi);
            return (
              <th
                key={hi}
                style={{
                  border: '1.5px solid #333',
                  padding: '0',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  backgroundColor: highlight ? accentColor : '#f0f0f0',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* 강조 열 상단 컬러 바 */}
                {highlight && (
                  <div
                    style={{
                      height: '4px',
                      backgroundColor: barColor,
                      width: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  />
                )}
                <div
                  style={{
                    padding: highlight ? '0.6rem 0.6rem 0.45rem' : '0.45rem 0.6rem',
                    marginTop: highlight ? '4px' : '0',
                  }}
                >
                  {header}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {/* 행 레이블 열 */}
            <td
              style={{
                border: '1.5px solid #333',
                padding: '0.45rem 0.6rem',
                fontWeight: 'bold',
                backgroundColor: '#f5f5f5',
                textAlign: 'center',
                verticalAlign: 'middle',
                wordBreak: 'keep-all',
              }}
            >
              {row.label}
            </td>

            {/* 데이터 셀들 */}
            {(row.cells || []).map((cell, ci) => {
              // ci=0 → headers[1], ci=1 → headers[2], ...
              const headerIdx = ci + 1;
              const highlight = isHighlight(headerIdx);
              return (
                <td
                  key={ci}
                  style={{
                    border: '1.5px solid #333',
                    padding: '0.45rem 0.6rem',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    backgroundColor: highlight ? accentColor : '#fff',
                    lineHeight: 1.5,
                    wordBreak: 'keep-all',
                    fontWeight: highlight ? '600' : 'normal',
                  }}
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
