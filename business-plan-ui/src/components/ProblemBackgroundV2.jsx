import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import '../index.css';

const wasteData = [
  { year: '2022', amount: 28 },
  { year: '2023', amount: 29.5 },
  { year: '2024', amount: 30 },
  { year: '2025(예상)', amount: 31 }
];

export default function ProblemBackgroundV2() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">1-1. 창업아이템 배경 및 필요성</h2>
      <div className="hwp-instruction-box">
        ※ 창업아이템의 기획 배경 및 시장/고객 대상의 발견된 문제점 등 기재
      </div>

      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '16px', color: '#000', lineHeight: '1.4' }}>
          "맑은 공기를 마시러 간 캠핑장에서 무심코 피우는 첫 불이 1급 발암물질을 뿜는다는 사실이 본 사업을 구상하게 된 최우선 동기입니다."
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', lineHeight: '1.6', marginBottom: '16px', wordBreak: 'keep-all' }}>
        <strong>가. 유해 매연에서 착안한 친환경 탈황제 캠핑 기어 도입</strong><br />
        가족과 함께 오랫동안 캠핑을 다니며 번개탄이나 화학 착화재에서 뿜어져 나오는 매운 연기 때문에 항상 심한 불편을 느꼈습니다. 이를 인지하고 조사해 본 결과, 시중에 유통되는 상당수의 젤이나 알코올 고체 연료에서 메탄올 등 1급 발암물질이 다량 검출되고 있다는 사실을 확인했습니다. 호흡기에 완벽히 안전하고 인체에 무해한 천연 불쏘시개를 찾던 중, 통영 해안가에 산더미처럼 쌓여 있는 굴 껍데기 폐기장을 마주하게 되었습니다. 굴 껍데기를 고온에 구운 '생석회' 상태가 실제 화력발전소에서 독성 가스를 빨아들이는 탁월한 친환경 탈황제로 쓰인다는 사실에서 핵심 문제 해결의 실마리를 발견했습니다.
      </p>

      <p style={{ fontSize: '15.5px', color: '#000', lineHeight: '1.6', marginBottom: '24px', wordBreak: 'keep-all' }}>
        <strong>나. 굴 껍데기 무단 방치로 인한 지역 사회 악취 및 민원 심화</strong><br />
        해안가에 버려진 굴 껍데기를 단순한 조개 공예품 몇 개로 재탄생 시키는 것만으로는 매년 30만 톤씩 쏟아지는 엄청난 양의 본질적 쓰레기 문제를 결코 감당할 수 없습니다. 따라서, 맹렬하게 타오르고 매주 수십만 명의 캠핑족이 꾸준히 태워 없애주는 <stron>&lt;불쏘시개 대형 소모품 시장&gt;</stron>으로 직접 침투해야 비로소 이 수산 부산물(폐기물) 문제를 가장 현실적이고 수익성 높게 해결할 수 있다고 판단했습니다.
      </p>

      <div style={{ border: '2px solid #333', padding: '20px', marginBottom: '30px', background: '#fff' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '14px', marginBottom: '20px', color: '#000' }}>
          &lt; 국내 해안가 굴 껍데기 폐기물 누적 발생 추이 (단위: 만 톤) &gt;
        </div>
        <div style={{ width: '100%', height: '220px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={wasteData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
              <XAxis dataKey="year" stroke="#333" fontSize={13} tickLine={false} axisLine={{ stroke: '#333' }} />
              <YAxis stroke="#333" fontSize={13} tickLine={false} axisLine={{ stroke: '#333' }} />
              <Tooltip cursor={{ fill: '#f5f5f5' }} contentStyle={{ border: '1px solid #333', borderRadius: '0', color: '#000' }} />
              <Bar dataKey="amount" fill="#666" barSize={50}>
                <LabelList dataKey="amount" position="top" style={{ fill: '#000', fontSize: '12.5px', fontWeight: 'bold' }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ fontSize: '12.5px', color: '#555', textAlign: 'right', marginTop: '10px' }}>
          * 통계 출처: 통계청 해양 부산물 방기 지표 환산 (2025)
        </div>
      </div>
    </div>
  );
}
