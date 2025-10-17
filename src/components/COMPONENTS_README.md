# مكونات المشروع - Component Architecture

تم إعادة تنظيم مكونات المشروع بشكل منهجي لتكون أكثر قابلية لإعادة الاستخدام وسهولة الصيانة.

## 📁 البنية الجديدة

```
src/components/
├── shared/                    # مكونات مشتركة قابلة لإعادة الاستخدام
│   ├── Button.tsx            # أزرار قابلة للتخصيص
│   ├── GradientText.tsx      # نص بتدرجات لونية
│   ├── SectionTitle.tsx      # عناوين الأقسام
│   ├── FormField.tsx         # حقول النماذج
│   ├── IconBox.tsx           # صندوق الأيقونات
│   ├── StatCard.tsx          # بطاقات الإحصائيات
│   ├── BackgroundDecoration.tsx  # زخارف الخلفية
│   ├── SocialLink.tsx        # روابط التواصل الاجتماعي
│   └── index.ts              # تصدير مركزي
│
├── sections/                  # أقسام الصفحات
│   ├── hero/                 # قسم Hero
│   │   ├── FloatingParticles.tsx
│   │   ├── ScrollIndicator.tsx
│   │   ├── HeroContent.tsx
│   │   └── index.ts
│   │
│   ├── about/                # قسم About
│   │   ├── AboutContent.tsx
│   │   ├── AboutImage.tsx
│   │   ├── AboutStats.tsx
│   │   └── index.ts
│   │
│   ├── services/             # قسم Services
│   │   ├── ServiceCard.tsx
│   │   ├── servicesData.ts
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── contact/              # قسم Contact
│   │   ├── ContactItemCard.tsx
│   │   ├── contactData.ts
│   │   └── index.ts
│   │
│   ├── HeroSection.tsx       # الملف الرئيسي للـ Hero
│   ├── AboutSection.tsx      # الملف الرئيسي للـ About
│   ├── ServicesSection.tsx   # الملف الرئيسي للـ Services
│   └── ContactSection.tsx    # الملف الرئيسي للـ Contact
│
└── common/                    # مكونات مشتركة للصفحات
    ├── ContactForm.tsx
    ├── ContactInfo.tsx
    ├── Footer.tsx
    └── Navbar.tsx
```

## 🎯 المكونات المشتركة (Shared Components)

### Button

مكون زر قابل للتخصيص بأنماط متعددة

```tsx
import { Button } from "@/components/shared";

<Button variant="primary" size="lg" icon={<IconComponent />}>
  Click Me
</Button>;
```

**الخصائص:**

- `variant`: "primary" | "secondary" | "outline"
- `size`: "sm" | "md" | "lg"
- `icon`: React element
- `iconPosition`: "left" | "right"

### GradientText

نص بتدرج لوني متحرك

```tsx
import { GradientText } from "@/components/shared";

<GradientText animated={true}>نص بتدرج لوني</GradientText>;
```

### SectionTitle

عنوان القسم مع إمكانية إضافة نص متدرج

```tsx
import { SectionTitle } from "@/components/shared";

<SectionTitle
  title="Our Premium Services"
  gradientWord="Premium"
  subtitle="Description here"
  centered={true}
/>;
```

### FormField

حقل نموذج مع Formik integration

```tsx
import { FormField } from "@/components/shared";

<FormField
  name="email"
  label="Email Address"
  type="email"
  placeholder="Enter your email"
/>;
```

### IconBox

صندوق أيقونة مع تأثيرات متحركة

```tsx
import { IconBox } from "@/components/shared";

<IconBox
  icon={IconComponent}
  gradient="from-[#FF6B35] to-[#e55a2b]"
  size="md"
  animated={true}
/>;
```

### StatCard

بطاقة إحصائيات مع أيقونة

```tsx
import { StatCard } from "@/components/shared";

<StatCard
  icon={IconComponent}
  value="10K+"
  label="Active Users"
  gradient="from-[#FF6B35] to-[#e55a2b]"
/>;
```

### BackgroundDecoration

زخارف خلفية متحركة

```tsx
import { BackgroundDecoration } from '@/components/shared';

<BackgroundDecoration variant="gradient" />
// أو
<BackgroundDecoration variant="particles" />
// أو
<BackgroundDecoration variant="both" />
```

### SocialLink

روابط التواصل الاجتماعي

```tsx
import { SocialLink } from "@/components/shared";

<SocialLink
  icon={FaFacebookF}
  href="https://facebook.com"
  gradient="from-blue-500 to-blue-600"
  ariaLabel="Facebook"
/>;
```

## 📦 مكونات الأقسام (Section Components)

### Hero Section

- `FloatingParticles`: جزيئات عائمة متحركة
- `ScrollIndicator`: مؤشر التمرير
- `HeroContent`: المحتوى الرئيسي للـ Hero

### About Section

- `AboutContent`: محتوى النص والإحصائيات
- `AboutImage`: صورة مع عناصر ديكور
- `AboutStats`: بطاقات الإحصائيات

### Services Section

- `ServiceCard`: بطاقة الخدمة
- `servicesData`: بيانات الخدمات
- `types`: تعريفات الأنواع

### Contact Section

- `ContactItemCard`: بطاقة معلومات الاتصال
- `contactData`: بيانات الاتصال

## 🚀 كيفية الاستخدام

### 1. استيراد من الملفات المركزية

```tsx
// استيراد مكونات مشتركة
import { Button, GradientText, IconBox } from "@/components/shared";

// استيراد مكونات قسم معين
import { ServiceCard, servicesData } from "@/components/sections/services";
```

### 2. استخدام المكونات

```tsx
function MyComponent() {
  return (
    <div>
      <Button variant="primary" size="lg">
        Click Me
      </Button>

      <GradientText>Beautiful Text</GradientText>
    </div>
  );
}
```

## 🎨 الفوائد

1. **إعادة الاستخدام**: جميع المكونات قابلة لإعادة الاستخدام في أي مكان
2. **سهولة الصيانة**: كل مكون في ملف منفصل
3. **التنظيم**: بنية واضحة ومنظمة
4. **قابلية التوسع**: سهولة إضافة مكونات جديدة
5. **الأداء**: استيراد فقط ما تحتاجه
6. **TypeScript**: دعم كامل مع تعريفات الأنواع

## 📝 ملاحظات

- جميع المكونات تدعم TypeScript بشكل كامل
- يمكن تخصيص الألوان والأحجام حسب الحاجة
- البيانات الثابتة منفصلة في ملفات منفصلة
- جميع المكونات responsive ومتوافقة مع جميع الشاشات
