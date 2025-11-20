import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tab from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Common/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '완전한 WAI-ARIA 탭 패턴을 구현한 탭 컴포넌트입니다. `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls` 등의 속성으로 접근성을 보장합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: 'object',
      description: '탭 레이블 배열',
    },
    activeTab: {
      control: 'number',
      description: '활성 탭 인덱스 (0부터 시작)',
    },
    onTabChange: {
      action: 'tab changed',
      description: '탭 변경 시 호출되는 콜백 함수',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

/**
 * 기본 탭 - 3개 탭
 */
export const Default: Story = {
  args: {
    tabs: ['탭 영역 1', '탭 영역 2', '탭 영역 3'],
    activeTab: 0,
  },
};

/**
 * 2개 탭 - 최소 구성
 */
export const TwoTabs: Story = {
  args: {
    tabs: ['첫 번째', '두 번째'],
    activeTab: 0,
  },
  parameters: {
    docs: {
      description: {
        story: '최소 구성인 2개 탭입니다.',
      },
    },
  },
};

/**
 * 많은 탭 - 6개 이상
 */
export const ManyTabs: Story = {
  args: {
    tabs: ['홈', '프로필', '메시지', '알림', '설정', '도움말', '정보', '로그아웃'],
    activeTab: 0,
  },
  parameters: {
    docs: {
      description: {
        story: '많은 탭이 있을 때의 레이아웃을 확인할 수 있습니다. 반응형으로 동작하는지 테스트하세요.',
      },
    },
  },
};

/**
 * 두 번째 탭 활성화
 */
export const SecondTabActive: Story = {
  args: {
    tabs: ['탭 1', '탭 2', '탭 3'],
    activeTab: 1,
  },
  parameters: {
    docs: {
      description: {
        story: '초기 활성 탭을 두 번째로 설정한 예시입니다.',
      },
    },
  },
};

/**
 * 인터랙티브 탭 with State
 */
export const Interactive: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['프로필', '설정', '알림'];

    return (
      <div style={{ width: '600px' }}>
        <Tab tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <div
          role='tabpanel'
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          style={{
            marginTop: '20px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        >
          <h3>탭 {activeTab + 1} 콘텐츠</h3>
          <p>{tabs[activeTab]} 패널의 내용이 여기에 표시됩니다.</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
실제 사용 예시입니다. Tab 컴포넌트와 TabPanel을 함께 사용하는 방법을 보여줍니다.

\`\`\`tsx
const [activeTab, setActiveTab] = useState(0);

<Tab tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
<div role="tabpanel" id={\`tabpanel-\${activeTab}\`} aria-labelledby={\`tab-\${activeTab}\`}>
  {/* 탭 콘텐츠 */}
</div>
\`\`\`
        `,
      },
    },
  },
};

/**
 * 접근성 시연 - WAI-ARIA 탭 패턴
 */
export const AccessibilityShowcase: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['정보', '리뷰', '관련 상품'];

    return (
      <div style={{ maxWidth: '800px', padding: '20px' }}>
        <h2 style={{ marginBottom: '16px' }}>WAI-ARIA 탭 패턴 시연</h2>

        <div style={{ marginBottom: '24px' }}>
          <Tab tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          <div
            role='tabpanel'
            id={`tabpanel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            style={{
              marginTop: '16px',
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px',
            }}
          >
            <h3>{tabs[activeTab]} 패널</h3>
            <p>현재 활성 탭: {activeTab + 1}번</p>
          </div>
        </div>

        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '4px' }}>
          <h3 style={{ marginBottom: '12px' }}>🔍 접근성 구현 상세</h3>

          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ marginBottom: '8px' }}>1. ARIA Roles</h4>
            <ul style={{ marginLeft: '20px', fontSize: '14px' }}>
              <li>
                <code>role="tablist"</code>: 탭 목록 컨테이너
              </li>
              <li>
                <code>role="tab"</code>: 각 탭 버튼
              </li>
              <li>
                <code>role="tabpanel"</code>: 탭 콘텐츠 패널
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ marginBottom: '8px' }}>2. ARIA 상태 및 속성</h4>
            <ul style={{ marginLeft: '20px', fontSize: '14px' }}>
              <li>
                <code>aria-selected</code>: 활성 탭 표시 (true/false)
              </li>
              <li>
                <code>aria-controls</code>: 탭이 제어하는 패널 ID 연결
              </li>
              <li>
                <code>aria-labelledby</code>: 패널을 레이블하는 탭 ID 연결
              </li>
              <li>
                <code>id</code>: 탭과 패널 간 연결을 위한 고유 ID
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ marginBottom: '8px' }}>3. 키보드 포커스 관리</h4>
            <ul style={{ marginLeft: '20px', fontSize: '14px' }}>
              <li>
                <code>tabIndex=0</code>: 활성 탭만 Tab 키로 포커스 가능
              </li>
              <li>
                <code>tabIndex=-1</code>: 비활성 탭은 Tab 키로 건너뜀
              </li>
              <li>화살표 키로 탭 간 이동 (구현 예정)</li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '8px' }}>4. 스크린리더 동작</h4>
            <ul style={{ marginLeft: '20px', fontSize: '14px' }}>
              <li>탭 목록 진입: "탭 목록, 탭 3개"</li>
              <li>
                탭 포커스: "정보, 탭, 1 of 3, 선택됨" / "리뷰, 탭, 2 of 3, 선택되지 않음"
              </li>
              <li>패널 진입: "정보, 탭 패널"</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: '20px',
            padding: '16px',
            backgroundColor: '#e3f2fd',
            borderRadius: '4px',
          }}
        >
          <h4 style={{ marginBottom: '8px' }}>💡 테스트 방법</h4>
          <ol style={{ marginLeft: '20px', fontSize: '14px' }}>
            <li>
              <strong>키보드 테스트</strong>: Tab 키로 탭 목록에 진입 → 마우스 클릭으로 탭 변경
            </li>
            <li>
              <strong>스크린리더 테스트</strong>: NVDA/JAWS를 켜고 탭 목록 탐색
            </li>
            <li>
              <strong>A11y 패널</strong>: Storybook의 Accessibility 탭에서 WCAG 준수 확인
            </li>
          </ol>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
### 완전한 WAI-ARIA 탭 패턴 구현

이 컴포넌트는 W3C WAI-ARIA Authoring Practices Guide의 탭 패턴을 따릅니다.

#### 구현된 기능
1. ✅ **Semantic Roles**: tablist, tab, tabpanel
2. ✅ **State Management**: aria-selected (활성/비활성)
3. ✅ **Relationships**: aria-controls, aria-labelledby (탭 ↔ 패널)
4. ✅ **Focus Management**: tabIndex (활성 탭만 포커스 가능)
5. ✅ **Unique IDs**: 각 탭과 패널에 고유 ID 부여

#### 키보드 지원 (현재 구현)
- **Tab**: 탭 목록으로 포커스 이동
- **Space / Enter**: 포커스된 탭 활성화
- **마우스 클릭**: 탭 선택

#### 향후 개선 사항 (옵션)
- **Arrow Left/Right**: 이전/다음 탭으로 포커스 이동
- **Home**: 첫 번째 탭으로 이동
- **End**: 마지막 탭으로 이동

#### 참고 문서
- [WAI-ARIA Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [ARIA: tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
        `,
      },
    },
  },
};

/**
 * Playground - 자유롭게 테스트
 */
export const Playground: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    const [tabs, setTabs] = useState(['탭 1', '탭 2', '탭 3']);

    return (
      <div style={{ width: '600px', padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h3>탭 레이블 편집</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {tabs.map((tab, index) => (
              <input
                key={index}
                type='text'
                value={tab}
                onChange={(e) => {
                  const newTabs = [...tabs];
                  newTabs[index] = e.target.value;
                  setTabs(newTabs);
                }}
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
            ))}
          </div>
          <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setTabs([...tabs, `탭 ${tabs.length + 1}`])}
              style={{ padding: '8px 16px' }}
            >
              탭 추가
            </button>
            <button
              onClick={() => {
                if (tabs.length > 1) {
                  setTabs(tabs.slice(0, -1));
                  if (activeTab >= tabs.length - 1) {
                    setActiveTab(tabs.length - 2);
                  }
                }
              }}
              style={{ padding: '8px 16px' }}
              disabled={tabs.length <= 1}
            >
              탭 제거
            </button>
          </div>
        </div>

        <Tab tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <div
          role='tabpanel'
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          style={{
            marginTop: '20px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        >
          <h3>{tabs[activeTab]} 콘텐츠</h3>
          <p>현재 활성 탭: {activeTab + 1}번</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '탭을 동적으로 추가/제거하고 레이블을 편집하면서 컴포넌트를 테스트할 수 있습니다.',
      },
    },
  },
};
