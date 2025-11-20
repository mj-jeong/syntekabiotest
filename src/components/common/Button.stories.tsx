import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '접근성을 강화한 버튼 컴포넌트입니다. 다양한 variant, size를 지원하며, ARIA 속성을 통해 스크린리더 사용자에게 명확한 정보를 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['filled', 'outline', 'text'],
      description: '버튼 스타일 변형',
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: '스크린리더를 위한 접근 가능한 레이블 (children이 아이콘인 경우 필수)',
    },
    ariaPressed: {
      control: 'boolean',
      description: '토글 버튼의 눌림 상태 (true/false)',
    },
    ariaExpanded: {
      control: 'boolean',
      description: '확장 가능한 영역의 열림/닫힘 상태 (드롭다운, 아코디언 등)',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * 기본 버튼 - Medium 크기의 Filled 스타일
 */
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

/**
 * Filled 변형 (기본) - 배경색이 채워진 스타일
 */
export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Filled Button',
  },
  parameters: {
    docs: {
      description: {
        story: '기본 버튼 스타일입니다. 주요 액션(Submit, Confirm 등)에 사용하세요.',
      },
    },
  },
};

/**
 * Outline 변형 - 테두리만 있는 스타일
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
  parameters: {
    docs: {
      description: {
        story: '테두리만 있는 버튼 스타일입니다. 보조 액션(Cancel, Back 등)에 사용하세요.',
      },
    },
  },
};

/**
 * Text 변형 - 텍스트만 있는 스타일
 */
export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Text Button',
  },
  parameters: {
    docs: {
      description: {
        story: '텍스트만 있는 버튼 스타일입니다. 덜 중요한 액션이나 링크 형태의 버튼에 사용하세요.',
      },
    },
  },
};

/**
 * Small 크기
 */
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

/**
 * Medium 크기 (기본)
 */
export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Button',
  },
};

/**
 * Large 크기
 */
export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

/**
 * 비활성화 상태
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '비활성화된 버튼입니다. `disabled` 속성과 함께 `aria-disabled`도 설정되어 스크린리더가 상태를 정확히 전달합니다.',
      },
    },
  },
};

/**
 * 스크린리더 레이블이 있는 버튼
 */
export const WithAriaLabel: Story = {
  args: {
    children: '🔍',
    ariaLabel: '검색',
  },
  parameters: {
    docs: {
      description: {
        story:
          '아이콘만 있는 버튼의 경우 `ariaLabel`을 필수로 제공해야 합니다. 스크린리더가 "검색, 버튼"으로 읽어줍니다.',
      },
    },
  },
};

/**
 * 토글 버튼 (aria-pressed)
 */
export const ToggleButton: Story = {
  args: {
    children: '즐겨찾기',
    ariaPressed: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '토글 버튼(on/off 상태를 가진 버튼)입니다. `aria-pressed`를 사용하여 현재 상태를 전달합니다. 예: 즐겨찾기, 좋아요, 음소거 등',
      },
    },
  },
};

/**
 * 확장 가능한 영역 트리거 (aria-expanded)
 */
export const ExpandableTrigger: Story = {
  args: {
    children: '더보기 ▼',
    ariaExpanded: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          '드롭다운 메뉴나 아코디언을 여는 버튼입니다. `aria-expanded`로 확장 상태를 전달합니다. false: 닫힘, true: 열림',
      },
    },
  },
};

/**
 * Playground - 모든 Props 조합 테스트
 */
export const Playground: Story = {
  args: {
    variant: 'filled',
    size: 'medium',
    children: 'Playground Button',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Controls 패널에서 모든 props를 자유롭게 조절해보세요.',
      },
    },
  },
};

/**
 * 접근성 시연 - 다양한 ARIA 속성 사용 예시
 */
export const AccessibilityShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '8px' }}>기본 버튼</h3>
        <Button>일반 버튼</Button>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px' }}>아이콘 버튼 (aria-label 필수)</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button ariaLabel='검색'>🔍</Button>
          <Button ariaLabel='설정'>⚙️</Button>
          <Button ariaLabel='알림'>🔔</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px' }}>토글 버튼 (aria-pressed)</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button ariaPressed={false}>좋아요 (비활성)</Button>
          <Button ariaPressed={true}>좋아요 (활성)</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px' }}>확장 트리거 (aria-expanded)</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button ariaExpanded={false}>메뉴 열기 ▼</Button>
          <Button ariaExpanded={true}>메뉴 닫기 ▲</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px' }}>비활성화 (disabled + aria-disabled)</h3>
        <Button disabled>비활성화된 버튼</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### 접근성 기능 요약

#### ARIA 속성
- **aria-label**: 시각적 레이블이 불충분한 경우 (아이콘 버튼)
- **aria-pressed**: 토글 버튼의 on/off 상태 전달
- **aria-expanded**: 드롭다운/아코디언의 열림/닫힘 상태 전달
- **aria-disabled**: disabled 속성과 함께 사용하여 상태 명시

#### 키보드 지원
- **Space / Enter**: 버튼 활성화
- **Tab**: 다음 포커스 가능한 요소로 이동
- **Shift + Tab**: 이전 포커스 가능한 요소로 이동

#### 스크린리더 동작
- 기본: "버튼 텍스트, 버튼"
- aria-label: "레이블 텍스트, 버튼"
- aria-pressed: "버튼 텍스트, 토글 버튼, 눌림" / "눌리지 않음"
- aria-expanded: "버튼 텍스트, 버튼, 확장됨" / "축소됨"
- disabled: "버튼 텍스트, 버튼, 비활성화됨"
        `,
      },
    },
  },
};

/**
 * 모든 Variant × Size 조합
 */
export const AllCombinations: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Size / Variant</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Filled</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Outline</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Text</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              <strong>Small</strong>
            </td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              <Button variant='filled' size='small'>
                Small
              </Button>
            </td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              <Button variant='outline' size='small'>
                Small
              </Button>
            </td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              <Button variant='text' size='small'>
                Small
              </Button>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              <strong>Medium</strong>
            </td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              <Button variant='filled' size='medium'>
                Medium
              </Button>
            </td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              <Button variant='outline' size='medium'>
                Medium
              </Button>
            </td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              <Button variant='text' size='medium'>
                Medium
              </Button>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              <strong>Large</strong>
            </td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              <Button variant='filled' size='large'>
                Large
              </Button>
            </td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              <Button variant='outline' size='large'>
                Large
              </Button>
            </td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              <Button variant='text' size='large'>
                Large
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 variant와 size의 조합을 한눈에 비교할 수 있습니다.',
      },
    },
  },
};
