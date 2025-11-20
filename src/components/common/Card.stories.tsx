import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Common/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '시맨틱 HTML을 사용한 카드 컴포넌트입니다. `<article>` 요소로 구성되어 있으며, 이미지 영역에 접근성 속성이 적용되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '카드 제목 (h3 요소로 렌더링)',
    },
    description: {
      control: 'text',
      description: '카드 설명 텍스트',
    },
    imageAlt: {
      control: 'text',
      description: '이미지 대체 텍스트 (접근성). 미제공 시 "카드 이미지"로 기본 설정됩니다.',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

/**
 * 기본 카드
 */
export const Default: Story = {
  args: {
    title: '과제용 카드',
    description: '인터렉션, 코드 구조등을 자유롭게 구현하세요.',
  },
};

/**
 * 긴 텍스트가 포함된 카드
 */
export const LongContent: Story = {
  args: {
    title: '긴 제목이 있는 카드 예시입니다',
    description:
      '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다. 모든 내용은 테스트 목적의 더미 데이터입니다. 텍스트가 여러 줄로 감싸지는 것을 확인할 수 있습니다.',
  },
  parameters: {
    docs: {
      description: {
        story: '긴 텍스트가 포함된 경우 레이아웃이 어떻게 동작하는지 확인할 수 있습니다.',
      },
    },
  },
};

/**
 * 짧은 텍스트가 포함된 카드
 */
export const ShortContent: Story = {
  args: {
    title: '짧은 제목',
    description: '짧은 설명.',
  },
  parameters: {
    docs: {
      description: {
        story: '최소한의 텍스트만 있는 경우입니다.',
      },
    },
  },
};

/**
 * 커스텀 이미지 대체 텍스트
 */
export const WithCustomImageAlt: Story = {
  args: {
    title: '제품 카드',
    description: '신제품 출시 안내',
    imageAlt: '신제품 패키지 사진',
  },
  parameters: {
    docs: {
      description: {
        story:
          '`imageAlt` prop을 제공하면 스크린리더가 해당 텍스트를 읽어줍니다. 스크린리더: "신제품 패키지 사진, 이미지"',
      },
    },
  },
};

/**
 * 기본 이미지 대체 텍스트 (한국어 fallback)
 */
export const WithDefaultImageAlt: Story = {
  args: {
    title: '기본 카드',
    description: 'imageAlt를 제공하지 않은 경우',
  },
  parameters: {
    docs: {
      description: {
        story:
          '`imageAlt`를 제공하지 않으면 기본값인 "카드 이미지"가 사용됩니다. 스크린리더: "카드 이미지, 이미지"',
      },
    },
  },
};

/**
 * 커스텀 스타일링
 */
export const CustomStyling: Story = {
  args: {
    title: '커스텀 스타일 카드',
    description: 'className prop을 통해 추가 스타일을 적용할 수 있습니다.',
    className: 'custom-card-class',
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
 * 접근성 시연 - 시맨틱 HTML과 ARIA 속성
 */
export const AccessibilityShowcase: Story = {
  render: () => (
    <div style={{ maxWidth: '800px', padding: '20px' }}>
      <h2 style={{ marginBottom: '16px' }}>접근성 기능</h2>

      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '8px' }}>1. 시맨틱 HTML - article 요소</h3>
        <Card
          title='뉴스 기사 카드'
          description='article 요소로 구성되어 스크린리더가 독립적인 콘텐츠로 인식합니다.'
          imageAlt='뉴스 썸네일'
        />
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
          💡 <code>&lt;article&gt;</code> 요소 사용으로 문서 구조를 명확히 전달
        </p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '8px' }}>2. 이미지 접근성 - role="img" + aria-label</h3>
        <Card
          title='제품 카드'
          description='이미지 영역에 role과 aria-label이 적용되어 있습니다.'
          imageAlt='제품 패키지 정면 사진'
        />
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
          💡 이미지 div에 <code>role="img"</code>와 <code>aria-label</code> 적용
        </p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '8px' }}>3. 제목 계층 구조 - h3 사용</h3>
        <Card
          title='올바른 제목 계층'
          description='카드 제목은 h3 요소로 구성되어 문서 구조를 유지합니다.'
        />
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
          💡 <code>&lt;h3&gt;</code> 사용으로 적절한 제목 계층 구조 유지
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### 접근성 기능 요약

#### 시맨틱 HTML
- **article 요소**: 카드가 독립적인 콘텐츠임을 명시
- **h3 요소**: 제목 계층 구조 유지 (section > h2, card > h3)
- **p 요소**: 설명 텍스트의 의미를 명확히 전달

#### ARIA 속성
- **role="img"**: 배경 이미지 div를 이미지로 인식하도록 설정
- **aria-label**: 이미지에 대한 대체 텍스트 제공
- **Fallback**: imageAlt 미제공 시 한국어 기본값 "카드 이미지" 사용

#### 스크린리더 동작
1. "기사, article" (article 요소 진입)
2. "제목, 제목 레벨 3" (h3 요소)
3. "이미지 대체 텍스트, 이미지" (role="img" + aria-label)
4. "설명 텍스트" (p 요소)

#### 구조 개선 사항
- ❌ 불필요한 래퍼 div 제거 (이전: div.txt)
- ✅ 직관적인 DOM 구조: article > img > h3 > p
        `,
      },
    },
  },
};

/**
 * 여러 카드를 나열한 예시
 */
export const MultipleCards: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', padding: '20px' }}>
      <Card title='카드 1' description='첫 번째 카드입니다.' imageAlt='카드 1 이미지' />
      <Card
        title='카드 2'
        description='두 번째 카드는 조금 더 긴 설명을 가지고 있습니다.'
        imageAlt='카드 2 이미지'
      />
      <Card title='카드 3' description='세 번째 카드입니다.' imageAlt='카드 3 이미지' />
      <Card
        title='카드 4'
        description='네 번째 카드는 매우 긴 설명 텍스트를 가지고 있어서 여러 줄로 감싸질 수 있습니다. 이것이 레이아웃에 어떤 영향을 미치는지 확인하세요.'
        imageAlt='카드 4 이미지'
      />
      <Card title='카드 5' description='짧은 설명.' />
      <Card title='카드 6' description='마지막 카드입니다.' imageAlt='카드 6 이미지' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '그리드 레이아웃에서 여러 카드를 배치한 예시입니다.',
      },
    },
  },
};
