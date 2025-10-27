/**
 * Meal Plans Management Page for Trainify Admin Panel
 *
 * This page handles the management of meal plans including:
 * - Viewing meal plans list
 * - Adding new meal plans
 * - Editing existing meal plans
 * - Deleting meal plans
 */

import React, { useState } from "react";
import Layout from "../components/dashboards/Layout";
import Topbar from "../components/dashboards/Topbar";
import DataTable from "../components/dashboards/DataTable";
import MealModal from "../components/dashboards/MealModal";
import ConfirmDialog from "../components/dashboards/ConfirmDialog";
import MealPreviewModal from "../components/dashboards/MealPreviewModal";
import { meals, formatDate, getStatusBadge, type Meal } from "../data/sample";
import type {
  Column,
  ActionsConfig,
} from "../components/dashboards/DataTable/types";

const MealPlansPage: React.FC = () => {
  // State management
  const [addEditModalOpen, setAddEditModalOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Meal | null>(null);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [previewingMeal, setPreviewingMeal] = useState<Meal | null>(null);

  // Event handlers
  const handleSearch = (query: string) => {
    console.log("Searching meals for:", query);
    // Implement search logic
  };

  const handleAdd = () => {
    setSelectedItem(null);
    setAddEditModalOpen(true);
  };

  const handleEdit = (item: Meal) => {
    setSelectedItem(item);
    setAddEditModalOpen(true);
  };

  const handleDelete = (item: Meal) => {
    setSelectedItem(item);
    setConfirmDialogOpen(true);
  };

  const handlePreview = (item: Meal) => {
    setPreviewingMeal(item);
    setPreviewModalOpen(true);
  };

  const handleSubmit = async (mealData: Omit<Meal, "id" | "createdAt">) => {
    console.log("Submitting meal data:", mealData);
    // Implement save logic here
    // For now, just close the modal
    setAddEditModalOpen(false);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting meal plan:", selectedItem);
    // Implement delete logic
    setConfirmDialogOpen(false);
    setSelectedItem(null);
  };

  // Helper function to render plan badge
  const getPlanBadge = (plan: string) => {
    const badges = {
      gold: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg",
      platinum:
        "bg-gradient-to-r from-gray-400 to-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg",
      diamond:
        "bg-gradient-to-r from-blue-400 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg",
    };
    return badges[plan as keyof typeof badges];
  };

  // Column definitions
  const columns: Column<Meal>[] = [
    { key: "name", title: "Meal Name", sortable: true },
    {
      key: "calories",
      title: "Calories",
      sortable: true,
      align: "center",
      render: (row) => `${row.calories} cal`,
    },
    {
      key: "plan",
      title: "Plan",
      sortable: true,
      align: "center",
      render: (row) => (
        <span className={getPlanBadge(row.plan)}>{row.plan.toUpperCase()}</span>
      ),
    },
    {
      key: "category",
      title: "Category",
      sortable: true,
      render: (row) => <span className="capitalize">{row.category}</span>,
    },
    {
      key: "difficulty",
      title: "Difficulty",
      sortable: true,
      align: "center",
      render: (row) => {
        const colors = {
          easy: "text-green-600 bg-green-100",
          medium: "text-yellow-600 bg-yellow-100",
          hard: "text-red-600 bg-red-100",
        };
        return (
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              colors[row.difficulty]
            }`}
          >
            {row.difficulty}
          </span>
        );
      },
    },
    {
      key: "status",
      title: "Status",
      render: (row) => (
        <span className={getStatusBadge(row.status)}>{row.status}</span>
      ),
    },
    {
      key: "createdAt",
      title: "Created",
      sortable: true,
      render: (row) => formatDate(row.createdAt),
    },
  ];

  // Actions configuration
  const actionsConfig: ActionsConfig<Meal> = {
    showEdit: true,
    showDelete: true,
    showPreview: true,
    onEdit: handleEdit,
    onDelete: handleDelete,
    onPreview: handlePreview,
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Topbar */}
        <Topbar
          title="Meals"
          search={{
            placeholder: "Search meals...",
            onSearch: handleSearch,
          }}
          onAdd={handleAdd}
        />

        <div className="p-4 sm:p-6 lg:p-8">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Meals Management
            </h1>
            <p className="text-gray-600 mt-2">
              Manage individual meal recipes for Gold, Platinum, and Diamond
              subscription plans.
            </p>
          </div>

          {/* Data Table */}
          <div className="space-y-6">
            <DataTable
              columns={columns as unknown as Column<Record<string, unknown>>[]}
              data={meals as unknown as Record<string, unknown>[]}
              actions={
                actionsConfig as unknown as ActionsConfig<
                  Record<string, unknown>
                >
              }
              loading={false}
              pagination={{
                page: 1,
                pageSize: 10,
                total: meals.length,
                onChange: (page) => console.log("Page changed:", page),
              }}
              selectable={true}
              onSort={(key, direction) => console.log("Sort:", key, direction)}
            />
          </div>
        </div>

        {/* Add/Edit Modal */}
        <MealModal
          open={addEditModalOpen}
          onClose={() => setAddEditModalOpen(false)}
          onSubmit={handleSubmit}
          initialValues={selectedItem}
          title={selectedItem ? "Edit Meal" : "Add New Meal"}
        />

        {/* Confirm Delete Dialog */}
        <ConfirmDialog
          open={confirmDialogOpen}
          title="Delete Meal"
          description={`Are you sure you want to delete "${selectedItem?.name}"? This action cannot be undone.`}
          onConfirm={handleConfirmDelete}
          onCancel={() => setConfirmDialogOpen(false)}
          confirmText="Delete"
          variant="danger"
        />

        {/* Meal Preview Modal */}
        <MealPreviewModal
          open={previewModalOpen}
          meal={previewingMeal}
          onClose={() => {
            setPreviewModalOpen(false);
            setPreviewingMeal(null);
          }}
        />
      </div>
    </Layout>
  );
};

export default MealPlansPage;
