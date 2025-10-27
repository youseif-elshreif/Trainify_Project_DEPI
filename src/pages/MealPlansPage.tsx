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
import AddEditModal from "../components/dashboards/AddEditModal";
import ConfirmDialog from "../components/dashboards/ConfirmDialog";
import {
  mealPlans,
  formatPrice,
  getStatusBadge,
  type MealPlan,
} from "../data/sample";
import type {
  Column,
  ActionsConfig,
} from "../components/dashboards/DataTable/types";

const MealPlansPage: React.FC = () => {
  // State management
  const [addEditModalOpen, setAddEditModalOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MealPlan | null>(null);

  // Event handlers
  const handleSearch = (query: string) => {
    console.log("Searching meal plans for:", query);
    // Implement search logic
  };

  const handleAdd = () => {
    setSelectedItem(null);
    setAddEditModalOpen(true);
  };

  const handleEdit = (item: MealPlan) => {
    setSelectedItem(item);
    setAddEditModalOpen(true);
  };

  const handleDelete = (item: MealPlan) => {
    setSelectedItem(item);
    setConfirmDialogOpen(true);
  };

  const handlePreview = (item: MealPlan) => {
    console.log("Previewing meal plan:", item);
    // Implement preview logic
  };

  const handleSubmit = (values: Record<string, unknown>) => {
    console.log("Submitting meal plan values:", values);
    // Implement save logic
    setAddEditModalOpen(false);
    return Promise.resolve();
  };

  const handleConfirmDelete = () => {
    console.log("Deleting meal plan:", selectedItem);
    // Implement delete logic
    setConfirmDialogOpen(false);
    setSelectedItem(null);
  };

  // Column definitions
  const columns: Column<MealPlan>[] = [
    { key: "name", title: "Name", sortable: true },
    { key: "type", title: "Type", sortable: true },
    { key: "calories", title: "Calories", sortable: true, align: "center" },
    {
      key: "duration",
      title: "Duration (days)",
      sortable: true,
      align: "center",
    },
    {
      key: "price",
      title: "Price",
      sortable: true,
      align: "right",
      render: (row) => formatPrice(row.price),
    },
    {
      key: "status",
      title: "Status",
      render: (row) => (
        <span className={getStatusBadge(row.status)}>{row.status}</span>
      ),
    },
  ];

  // Actions configuration
  const actionsConfig: ActionsConfig<MealPlan> = {
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
          title="Meal Plans"
          search={{
            placeholder: "Search meal plans...",
            onSearch: handleSearch,
          }}
          onAdd={handleAdd}
        />

        <div className="p-4 sm:p-6 lg:p-8">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Meal Plans Management
            </h1>
            <p className="text-gray-600 mt-2">
              Create and manage nutrition plans for different fitness goals.
            </p>
          </div>

          {/* Data Table */}
          <div className="space-y-6">
            <DataTable
              columns={columns as unknown as Column<Record<string, unknown>>[]}
              data={mealPlans as unknown as Record<string, unknown>[]}
              actions={
                actionsConfig as unknown as ActionsConfig<
                  Record<string, unknown>
                >
              }
              loading={false}
              pagination={{
                page: 1,
                pageSize: 10,
                total: mealPlans.length,
                onChange: (page) => console.log("Page changed:", page),
              }}
              selectable={true}
              onSort={(key, direction) => console.log("Sort:", key, direction)}
            />
          </div>
        </div>

        {/* Add/Edit Modal */}
        <AddEditModal
          open={addEditModalOpen}
          onClose={() => setAddEditModalOpen(false)}
          onSubmit={handleSubmit}
          initialValues={selectedItem ? { ...selectedItem } : {}}
          title={selectedItem ? "Edit Meal Plan" : "Add New Meal Plan"}
        />

        {/* Confirm Delete Dialog */}
        <ConfirmDialog
          open={confirmDialogOpen}
          title="Delete Meal Plan"
          description={`Are you sure you want to delete "${selectedItem?.name}"? This action cannot be undone.`}
          onConfirm={handleConfirmDelete}
          onCancel={() => setConfirmDialogOpen(false)}
          confirmText="Delete"
          variant="danger"
        />
      </div>
    </Layout>
  );
};

export default MealPlansPage;
