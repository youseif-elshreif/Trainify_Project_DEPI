# Trainify Dashboard Structure

لقد تم إعادة هيكلة صفحات الداشبورد وفقاً للمطالب التالية:

## الهيكل الجديد

### 1. الصفحة الرئيسية `/dashboard`

- تحتوي على Overview Cards فقط
- إزالة التابس والجداول
- بطاقات تنقل سريعة لكل قسم

### 2. الصفحات المنفصلة

#### `/dashboard/supplements` - SupplementsPage.tsx

- إدارة المكملات الغذائية
- عرض، إضافة، تعديل، حذف المنتجات
- جدول مع البحث والترقيم

#### `/dashboard/meals` - MealPlansPage.tsx

- إدارة خطط الوجبات
- إنشاء خطط تغذية مختلفة
- معلومات السعرات والمدة

#### `/dashboard/training` - TrainingProgramsPage.tsx

- إدارة برامج التدريب
- مستويات مختلفة للياقة
- عدد التمارين والأسابيع

#### `/dashboard/users` - UsersPage.tsx

- إدارة المستخدمين
- أدوار وصلاحيات
- معلومات النشاط

## التحديثات المطلوبة في App.tsx

```tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LandingPage } from "./components";
import {
  DashboardPage,
  SupplementsPage,
  MealPlansPage,
  TrainingProgramsPage,
  UsersPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/supplements" element={<SupplementsPage />} />
        <Route path="/dashboard/meals" element={<MealPlansPage />} />
        <Route path="/dashboard/training" element={<TrainingProgramsPage />} />
        <Route path="/dashboard/users" element={<UsersPage />} />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## الملفات المحدثة

1. ✅ `src/pages/dashboard.tsx` - الصفحة الرئيسية مع Overview Cards فقط
2. ✅ `src/pages/SupplementsPage.tsx` - صفحة إدارة المكملات
3. ✅ `src/pages/MealPlansPage.tsx` - صفحة إدارة خطط الوجبات
4. ✅ `src/pages/TrainingProgramsPage.tsx` - صفحة إدارة برامج التدريب
5. ✅ `src/pages/UsersPage.tsx` - صفحة إدارة المستخدمين
6. ✅ `src/components/dashboards/Layout/Layout.tsx` - تحديث روابط الـ sidebar
7. ✅ `src/pages/index.ts` - تصدير جميع الصفحات

## المميزات

- كل صفحة منفصلة ومستقلة
- استخدام نفس مكونات الداشبورد الموجودة
- نفس التصميم والستايل
- إمكانية البحث والترقيم في كل صفحة
- Modals للإضافة والتعديل
- تأكيد الحذف

## الخطوات التالية

1. تحديث ملف `App.tsx` ليستخدم الصفحات الجديدة
2. تطبيق React Router للتنقل بين الصفحات
3. تحديث active state في الـ sidebar حسب الصفحة الحالية
4. إضافة منطق للبحث والفلترة في كل صفحة
