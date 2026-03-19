import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import { 
  Server, Cpu, Database, ArrowRight, ShieldCheck, Activity, Users, Monitor 
} from 'lucide-react';

const expenseData = [
  { name: '인건비', amount: 4500, label: '45%' },
  { name: '외주용역비', amount: 2000, label: '20%' },
  { name: '기계장치', amount: 1000, label: '10%' },
  { name: '지급수수료', amount: 1000, label: '10%' },
  { name: '광고선전비', amount: 1000, label: '10%' },
  { name: '무형자산', amount: 500, label: '5%' },
];

const cloudCostTrend = [
  { year: '2022', costIndex: 100 },
  { year: '2023', costIndex: 132 },
  { year: '2024 (1H)', costIndex: 178 },
  { year: '2024 (3H)', costIndex: 215 }, // 115.3% 증가 반영
];

const marketReboundData = [
  { month: '10월', index: 120 },
  { month: '11월', index: 135 },
  { month: '12월', index: 142 },
  { month: '1월', index: 168 },
  { month: '2월', index: 210 },
  { month: '3월', index: 245 }, // 제약/바이오 시장 뚜렷한 반등 (비즈워치)
];

export default function BusinessPlanUI() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 border border-gray-300 shadow-sm" style={{ fontFamily: '"Noto Serif KR", "Batang", serif', wordBreak: 'keep-all', lineHeight: '1.6' }}>
      
      {/* HEADER */}
      <div className="border-b-2 border-black pb-4 mb-8">
        <div className="text-sm font-bold text-gray-500 mb-2 font-sans tracking-tight">2026년 예비창업패키지 사업계획서 (시각화 요약본)</div>
        <h1 className="text-3xl font-extrabold text-black font-sans leading-snug">
          중소 제약사의 라이선스 비용 및 보안 문제를 해결하는 파운데이션 모델 기반 고정밀 하이브리드 단백질 표적 신약 설계 통합 플랫폼
        </h1>
      </div>

      {/* 1. 문제 인식 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 font-sans border-l-4 border-black pl-3 py-1 flex items-center">
          <Activity className="mr-2" size={24} /> 1. 핵심 문제 (Problem) 및 시장의 기회
        </h2>
        
        {/* Quote Block */}
        <div className="bg-gray-100 border-l-4 border-gray-600 p-5 rounded-r-md mb-6 font-semibold text-lg">
          "제약·바이오 섹터의 뚜렷한 시장 반등 기조 속에서도, 글로벌 표준 솔루션의 초고가 라이선스와 파운데이션 모델을 다룰 IT 전문 인력의 부재는 중소 벤처의 치명적인 진입 장벽으로 작용하고 있습니다."
        </div>

        <div className="grid grid-cols-2 gap-6 mb-4">
          <div className="border border-gray-200 p-4 rounded-sm bg-white">
            <div className="text-base font-bold font-sans mb-3 text-center border-b border-gray-200 pb-2">신약 개발 AI 클라우드 유지비용 급증 지수</div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cloudCostTrend}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#666' }} axisLine={{ stroke: '#999' }} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: '#666' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', fontSize: '13px' }} />
                  <Line type="monotone" dataKey="costIndex" stroke="#333" strokeWidth={3} dot={{ r: 4, fill: '#333' }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-right">* 출처: 글로벌 클라우드 인프라 지출 동향 (CIO, 2024년 3분기)</div>
          </div>

          <div className="border border-gray-200 p-4 rounded-sm bg-white">
            <div className="text-base font-bold font-sans mb-3 text-center border-b border-gray-200 pb-2">제약·바이오 섹터 벤처 투자 지수 반등세</div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketReboundData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#666' }} axisLine={{ stroke: '#999' }} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: '#666' }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: '#f5f5f5' }} contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', fontSize: '13px' }} />
                  <Bar dataKey="index" fill="#666" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-right">* 출처: 제약/바이오 회사 주가 급등 동향 (비즈워치, 2026.03)</div>
          </div>
        </div>
        
        <ul className="list-disc pl-6 text-gray-800 space-y-2 text-sm mt-4 font-sans">
          <li><strong>비용 급증 및 양극화</strong>: 2024년 3분기 인프라 지출 115.3% 증가. 반면 국내 바이오 벤처 66%는 매출 5억 미만으로 출혈 극심.</li>
          <li><strong>보안 한계</strong>: 민감한 데이터(GxP 규제)로 인해 클라우드 사용을 주저하며, 수억 원 대의 폐쇄형(On-premise) 외산 솔루션에 의존 중.</li>
        </ul>
      </section>

      {/* 2. 실현 가능성 (Solution) */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 font-sans border-l-4 border-black pl-3 py-1 flex items-center">
          <Database className="mr-2" size={24} /> 2. 해결 방안 (Solution) 및 시스템 아키텍처
        </h2>

        {/* Architecture UI Mockup */}
        <div className="bg-gray-50 border-2 border-gray-300 p-6 flex flex-col items-center justify-center mb-6">
          <div className="text-center font-bold font-sans mb-6 bg-white px-4 py-1 border border-gray-300 shadow-sm inline-block">
            하이브리드 단백질 표적 딥테크 아키텍처 (TCO 86.8% 절감)
          </div>
          
          <div className="flex items-center justify-between w-full max-w-3xl">
            {/* Step 1 */}
            <div className="flex-1 bg-white border border-gray-400 p-4 text-center shadow-sm relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-0.5 rounded-sm">Step 1. 초고속 스크리닝</div>
              <Cpu className="mx-auto mb-2 text-gray-700" size={32} />
              <div className="font-bold text-sm mb-1">Boltz-2 (파운데이션 모델)</div>
              <div className="text-xs text-gray-500 font-sans">표적 단백질 3D 구조 AI 예측<br/>(1,000배 빠른 탐색)</div>
            </div>

            <ArrowRight className="mx-4 text-gray-400" size={32} />

            {/* Step 2 */}
            <div className="flex-1 bg-white border border-gray-400 p-4 text-center shadow-sm relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-0.5 rounded-sm">Step 2. 물리 정밀 검증</div>
              <Activity className="mx-auto mb-2 text-gray-700" size={32} />
              <div className="font-bold text-sm mb-1">OpenFE (물리 시뮬레이션)</div>
              <div className="text-xs text-gray-500 font-sans">리간드 결합 자유에너지(FEP) 연산<br/>(극소수 후보군 집중 검증)</div>
            </div>

            <ArrowRight className="mx-4 text-gray-400" size={32} />

            {/* Step 3 */}
            <div className="flex-1 bg-gray-800 border border-gray-800 text-white p-4 text-center shadow-sm relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 text-black font-bold text-xs px-2 py-0.5 rounded-sm">최종 도출</div>
              <Monitor className="mx-auto mb-2 text-white" size={32} />
              <div className="font-bold text-sm mb-1">GUI 대시보드 (SaaS)</div>
              <div className="text-xs text-gray-300 font-sans">연구원 맞춤형 결과 시각화<br/>(폐쇄형 온프레미스 연동)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 예산 계획 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 font-sans border-l-4 border-black pl-3 py-1 flex items-center">
          <Server className="mr-2" size={24} /> 3. 정부지원 사업비 집행 계획 (총 1억 원)
        </h2>

        <div className="flex gap-6 mb-4 items-start">
          <div className="w-1/3">
            <div className="bg-white border border-gray-200 p-4">
               <div className="text-sm font-bold font-sans mb-4 text-center border-b border-gray-200 pb-2">예산 비중 (100M KRW)</div>
               <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={expenseData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e5e5" />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" tick={{ fontSize: 11, fill: '#333' }} axisLine={false} tickLine={false} width={70} />
                    <Tooltip cursor={{ fill: '#f5f5f5' }} contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', fontSize: '12px' }} />
                    <Bar dataKey="amount" fill="#666" radius={[0, 2, 2, 0]}>
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="w-2/3">
            <table className="w-full text-sm border-t-2 border-b-2 border-black font-sans">
              <thead className="bg-gray-100 border-b border-black text-center font-bold">
                <tr>
                  <th className="py-3 px-2">비목</th>
                  <th className="py-3 px-2 text-left">세부 집행 내역</th>
                  <th className="py-3 px-2">단가/기준</th>
                  <th className="py-3 px-2">총액 비율</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-b border-gray-300">
                  <td className="py-3 px-2 text-center font-semibold">인건비</td>
                  <td className="py-3 px-2 font-medium">단백질 표적 검수 핵심 AI 연구원 1인 정규직 채용</td>
                  <td className="py-3 px-2 text-center text-xs">월 500만×9개월</td>
                  <td className="py-3 px-2 text-right font-bold">4,500만 (45%)</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 px-2 text-center font-semibold">외주용역비</td>
                  <td className="py-3 px-2 font-medium">단백질 시각화 웹 GUI 대시보드(SaaS) 프론트/UX 설계</td>
                  <td className="py-3 px-2 text-center text-xs">외주 계약 1식</td>
                  <td className="py-3 px-2 text-right font-bold">2,000만 (20%)</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 px-2 text-center font-semibold">기계장치</td>
                  <td className="py-3 px-2 font-medium">RTX 4090 GPU 랙 및 딥러닝 워크스테이션 인프라</td>
                  <td className="py-3 px-2 text-center text-xs">고성능 서버 2대</td>
                  <td className="py-3 px-2 text-right font-bold">1,000만 (10%)</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 px-2 text-center font-semibold">지급수수료</td>
                  <td className="py-3 px-2 font-medium">AWS 클라우드 임차비 및 DB/보안 엔터프라이즈 구독</td>
                  <td className="py-3 px-2 text-center text-xs">연간 라이선스</td>
                  <td className="py-3 px-2 text-right font-bold">1,000만 (10%)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-2 text-center font-semibold">광고/자산</td>
                  <td className="py-3 px-2 font-medium text-gray-600 text-xs">B2B 홍보 랜딩페이지 및 특허/상표권 출원 수수료</td>
                  <td className="py-3 px-2 text-center text-xs">-</td>
                  <td className="py-3 px-2 text-right font-bold text-gray-500">1,500만 (15%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. 팀 구성 */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-sans border-l-4 border-black pl-3 py-1 flex items-center">
          <Users className="mr-2" size={24} /> 4. 소수 정예 딥테크 팀 구성 (Team)
        </h2>
        <div className="flex gap-4">
          <div className="flex-1 border border-black p-4 bg-gray-50 flex items-start">
            <ShieldCheck className="mr-3 mt-1 text-black" size={24} />
            <div>
              <div className="font-bold text-base mb-1">대표자 (1인 풀스택 융합 인재)</div>
              <div className="text-sm text-gray-700">계산화학 및 전산약학 전공 지식 + 파운데이션 모델 아키텍처 리딩 및 MLOps 풀스택 병렬 처리 개발 역량 보유</div>
            </div>
          </div>
          <div className="flex-1 border border-gray-300 p-4 bg-white flex items-start">
            <Activity className="mr-3 mt-1 text-gray-600" size={24} />
            <div>
              <div className="font-bold text-base mb-1 text-gray-800">핵심 AI 연구원 (신규 지원금 채용)</div>
              <div className="text-sm text-gray-600">구조생물학 도메인 특화 리서처. 단백질-리간드 결합 시뮬레이션 데이터 정밀 타당성 검사 전담</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
