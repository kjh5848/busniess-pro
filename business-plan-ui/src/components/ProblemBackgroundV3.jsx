import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import '../index.css';

const wasteData = [
  { year: '2022', amount: 28 },
  { year: '2023', amount: 30 },
  { year: '2024', amount: 33 },
  { year: '2025(예상)', amount: 35 }
];

export default function ProblemBackgroundV3() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">1-1. 창업아이템 배경 및 필요성</h2>
      <div className="hwp-instruction-box">
        ※ 창업 아이템을 개발(개선)하게 된 외부적/내부적 배경 및 필요성과 이를 해결하기 위한 목적 등 기재
      </div>

      <div style={{ borderLeft: '3px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '15.5px', color: '#000', lineHeight: '1.5' }}>
          "안락한 캠핑장에서 피우는 첫 불이 '1급 발암물질'을 뿜어낸다는 치명적 결핍과, 제어 불가한 해안가 수산 폐기물(통영 굴 껍데기) 30만 톤 방치 대란을 동시 타격하는 소셜 임팩트 솔루션"
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>가. 유해 매연 착화재와 지역사회 폐기물 방치의 양극화 심화 (외부적 배경)</p>
      <ul style={{ listStyleType: "'ㅇ '", paddingLeft: '20px', fontSize: '14.5px', color: '#000', lineHeight: '1.6', marginBottom: '20px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <li style={{ marginBottom: '8px' }}><strong>(1급 발암물질 노출 위협)</strong> 시중 유통되는 상당수의 고체 연료 및 알코올 젤 착화재에서 메탄올, 비소 등 치명적 화학물질 다량 검출. 가족 단위 캠퍼들의 호흡기 건강 심각한 위협</li>
        <li style={{ marginBottom: '8px' }}><strong>(통영 굴 껍데기 30만 톤 대란)</strong> 매년 국내 양식장에서 버려지는 굴 껍데기가 해안가에 산더미처럼 방치되어 생태계 훼손 및 제어 불가능한 악취 민원 유발 중</li>
      </ul>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>나. 산업용 '생석회' 기전을 응용한 혁신 안심 착화재 개발 (내부적 배경 및 해결안)</p>
      <ul style={{ listStyleType: "'- '", paddingLeft: '20px', fontSize: '14.5px', color: '#000', lineHeight: '1.6', marginBottom: '24px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <li style={{ marginBottom: '8px' }}><strong>(대형 소모품 시장으로의 치환)</strong> 단순 공예품 재활용만으로는 30만 톤 처리의 물리적 한계 봉착. 매주 수십만 명이 '일회용'으로 꾸준히 태워 소진하는 대형 상업/캠핑 시장 진입 결심</li>
        <li><strong>(독성 가스 자체 중화 원리)</strong> 폐기물(굴 껍데기)을 고온 소성 시 생성되는 <strong>'산화칼슘(생석회)'</strong> 성분이, 연료 연소 시 발생되는 유독 가스를 스스로 흡착하여 억제하는 친환경 선순환 모델 구축</li>
      </ul>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', alignItems: 'stretch' }}>
        <div style={{ flex: 1, border: '2px solid #333', padding: '16px', background: '#fff' }}>
          <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '13.5px', marginBottom: '16px', color: '#000' }}>
            &lt; 국내 해안가 굴 껍데기 누적 발생 추이 (단위: 만 톤) &gt;
          </div>
          <div style={{ width: '100%', height: '160px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={wasteData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
                <XAxis dataKey="year" stroke="#333" fontSize={12} tickLine={false} axisLine={{ stroke: '#333' }} />
                <YAxis stroke="#333" fontSize={12} tickLine={false} axisLine={{ stroke: '#333' }} domain={[0, 40]} />
                <Tooltip cursor={{ fill: '#f5f5f5' }} contentStyle={{ border: '1px solid #333', borderRadius: '0', color: '#000' }} />
                <Bar dataKey="amount" fill="#666" barSize={35}>
                  <LabelList dataKey="amount" position="top" style={{ fill: '#000', fontSize: '11.5px', fontWeight: 'bold' }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ fontSize: '11.5px', color: '#555', textAlign: 'right', marginTop: '10px' }}>
            * 통계 출처: 주요 해양 부산물 방기 지표 환산 (2025)
          </div>
        </div>

        <div style={{ flex: 1, border: '2px solid #333', padding: '16px', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '100%', height: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
             <img src="/concept_image.png" alt="사회적 문제 가치 치환" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ fontSize: '12px', color: '#333', textAlign: 'center', marginTop: '15px', fontWeight: 'bold' }}>
             &lt; 사회적 문제(폐기물)를 소비자 가치(안전)로 치환 &gt;
          </div>
        </div>
      </div>
    </div>
  );
}
