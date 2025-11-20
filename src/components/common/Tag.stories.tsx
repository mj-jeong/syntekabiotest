import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Common/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '간단한 태그 컴포넌트입니다. 레이블, 카테고리, 상태 표시 등 다양한 용도로 사용할 수 있습니다. 필요에 따라 시맨틱 role을 추가하여 접근성을 향상시킬 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '태그에 표시될 콘텐츠',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

/**
 * 기본 태그
 */
export const Default: Story = {
  args: {
    children: '기본 태그',
  },
};

/**
 * 짧은 텍스트 태그
 */
export const ShortText: Story = {
  args: {
    children: 'NEW',
  },
  parameters: {
    docs: {
      description: {
        story: '짧은 텍스트나 단일 문자를 사용한 태그입니다.',
      },
    },
  },
};

/**
 * 긴 텍스트 태그
 */
export const LongText: Story = {
  args: {
    children: '이것은 매우 긴 텍스트를 가진 태그의 예시입니다',
  },
  parameters: {
    docs: {
      description: {
        story: '긴 텍스트가 태그 안에서 어떻게 표시되는지 확인할 수 있습니다.',
      },
    },
  },
};

/**
 * 이모지 태그
 */
export const WithEmoji: Story = {
  args: {
    children: '🔥 인기',
  },
  parameters: {
    docs: {
      description: {
        story: '이모지를 포함한 태그입니다. 시각적으로 눈에 띄게 만들 수 있습니다.',
      },
    },
  },
};

/**
 * 숫자 태그
 */
export const NumberTag: Story = {
  args: {
    children: '5',
  },
  parameters: {
    docs: {
      description: {
        story: '숫자만 표시하는 태그입니다. 카운트나 레이블에 사용할 수 있습니다.',
      },
    },
  },
};

/**
 * 커스텀 스타일링
 */
export const CustomStyling: Story = {
  args: {
    children: '커스텀 스타일',
    className: 'custom-tag-class',
  },
  parameters: {
    docs: {
      description: {
        story: '`className` prop을 사용하여 추가 스타일을 적용할 수 있습니다.',
      },
    },
  },
};

/**
 * 여러 태그 나열
 */
export const MultipleTags: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag>React</Tag>
      <Tag>TypeScript</Tag>
      <Tag>Next.js</Tag>
      <Tag>SCSS</Tag>
      <Tag>Storybook</Tag>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '여러 태그를 나란히 배치한 예시입니다. 기술 스택, 카테고리 등을 표시할 때 유용합니다.',
      },
    },
  },
};

/**
 * 다양한 용도의 태그
 */
export const UseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '8px' }}>상태 표시</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Tag>진행중</Tag>
          <Tag>완료</Tag>
          <Tag>대기</Tag>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px' }}>카테고리</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Tag>개발</Tag>
          <Tag>디자인</Tag>
          <Tag>마케팅</Tag>
          <Tag>기획</Tag>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px' }}>레이블</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Tag>🔥 HOT</Tag>
          <Tag>⭐ NEW</Tag>
          <Tag>💰 SALE</Tag>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px' }}>기술 스택</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Tag>React</Tag>
          <Tag>TypeScript</Tag>
          <Tag>Next.js</Tag>
          <Tag>SCSS Modules</Tag>
          <Tag>Storybook</Tag>
          <Tag>Webpack</Tag>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '태그 컴포넌트의 다양한 사용 사례를 보여줍니다.',
      },
    },
  },
};

/**
 * 접근성 개선 제안
 */
export const AccessibilityEnhancement: Story = {
  render: () => (
    <div style={{ maxWidth: '800px', padding: '20px' }}>
      <h2 style={{ marginBottom: '16px' }}>접근성 개선 제안</h2>

      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '8px' }}>현재 구현</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Tag>기본 태그</Tag>
          <Tag>일반 div 요소</Tag>
        </div>
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
          ⚠️ 현재는 generic <code>&lt;div&gt;</code> 요소로 구현되어 있습니다.
        </p>
      </div>

      <div
        style={{
          marginBottom: '24px',
          padding: '16px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
        }}
      >
        <h3 style={{ marginBottom: '12px' }}>💡 개선 제안 1: span 요소 사용</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ padding: '4px 12px', backgroundColor: '#e0e0e0', borderRadius: '4px' }}>
            인라인 태그
          </span>
          <span style={{ padding: '4px 12px', backgroundColor: '#e0e0e0', borderRadius: '4px' }}>
            텍스트 흐름 유지
          </span>
        </div>
        <p style={{ marginTop: '8px', fontSize: '14px' }}>
          ✅ <code>&lt;span&gt;</code>은 인라인 요소로 텍스트 흐름에 자연스럽게 통합됩니다.
        </p>
      </div>

      <div
        style={{
          marginBottom: '24px',
          padding: '16px',
          backgroundColor: '#e3f2fd',
          borderRadius: '4px',
        }}
      >
        <h3 style={{ marginBottom: '12px' }}>💡 개선 제안 2: role 속성 추가</h3>
        <div style={{ marginBottom: '12px' }}>
          <h4 style={{ marginBottom: '8px' }}>상태 표시용 - role="status"</h4>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div role='status' style={{ padding: '4px 12px', backgroundColor: '#4caf50', color: 'white', borderRadius: '4px' }}>
              활성
            </div>
            <div role='status' style={{ padding: '4px 12px', backgroundColor: '#f44336', color: 'white', borderRadius: '4px' }}>
              비활성
            </div>
          </div>
          <p style={{ marginTop: '8px', fontSize: '14px' }}>
            ✅ 스크린리더가 상태 변경을 자동으로 공지합니다.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: '8px' }}>일반 레이블용 - role="text" 또는 role="img"</h4>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div role='text' style={{ padding: '4px 12px', backgroundColor: '#ff9800', color: 'white', borderRadius: '4px' }}>
              🔥 HOT
            </div>
            <div role='img' aria-label='새 제품' style={{ padding: '4px 12px', backgroundColor: '#2196f3', color: 'white', borderRadius: '4px' }}>
              ⭐ NEW
            </div>
          </div>
          <p style={{ marginTop: '8px', fontSize: '14px' }}>
            ✅ 의미론적으로 명확한 역할 정의
          </p>
        </div>
      </div>

      <div
        style={{
          marginBottom: '24px',
          padding: '16px',
          backgroundColor: '#fff3e0',
          borderRadius: '4px',
        }}
      >
        <h3 style={{ marginBottom: '12px' }}>💡 개선 제안 3: mark 요소 사용 (하이라이트)</h3>
        <p style={{ marginBottom: '8px' }}>
          검색 결과나 중요한 키워드를 강조할 때는{' '}
          <mark style={{ padding: '2px 8px', backgroundColor: '#ffeb3b' }}>mark 요소</mark>를 사용하세요.
        </p>
        <p style={{ fontSize: '14px' }}>
          ✅ <code>&lt;mark&gt;</code>는 하이라이트된 텍스트의 의미를 전달합니다.
        </p>
      </div>

      <div
        style={{
          padding: '16px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
        }}
      >
        <h3 style={{ marginBottom: '12px' }}>📝 권장 사용 가이드</h3>
        <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>
                용도
              </th>
              <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>
                권장 요소
              </th>
              <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>
                ARIA 속성
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>일반 레이블</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                <code>&lt;span&gt;</code>
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>-</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>상태 표시</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                <code>&lt;span&gt;</code>
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                <code>role="status"</code>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>하이라이트</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                <code>&lt;mark&gt;</code>
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>-</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>아이콘 + 텍스트</td>
              <td style={{ padding: '8px' }}>
                <code>&lt;span&gt;</code>
              </td>
              <td style={{ padding: '8px' }}>
                <code>role="img" aria-label</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### 접근성 개선 방안

현재 Tag 컴포넌트는 generic \`div\` 요소로 구현되어 있습니다. 용도에 따라 더 적절한 HTML 요소나 ARIA 속성을 사용하면 접근성을 향상시킬 수 있습니다.

#### 개선 옵션

1. **\`<span>\` 요소로 변경**
   - 인라인 요소로 텍스트 흐름에 자연스럽게 통합
   - 블록 레벨인 \`div\`보다 태그에 적합

2. **\`role="status"\` 추가 (상태 표시용)**
   - 동적으로 변경되는 상태를 스크린리더에 자동 공지
   - 예: "진행중", "완료", "오류" 등

3. **\`role="img"\` + \`aria-label\` (아이콘 포함)**
   - 이모지/아이콘 + 텍스트 조합 시 의미 명확화
   - 예: 🔥 HOT → aria-label="인기 상품"

4. **\`<mark>\` 요소 (하이라이트용)**
   - 검색 결과나 중요 키워드 강조 시
   - 시맨틱하게 하이라이트된 텍스트임을 전달

#### 구현 예시

\`\`\`tsx
// 일반 레이블
<span className={styles.tag}>React</span>

// 상태 표시
<span className={styles.tag} role="status">진행중</span>

// 아이콘 포함
<span className={styles.tag} role="img" aria-label="인기 상품">🔥 HOT</span>

// 하이라이트
<mark className={styles.tag}>검색어</mark>
\`\`\`
        `,
      },
    },
  },
};
