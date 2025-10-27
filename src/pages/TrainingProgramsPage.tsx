/**
 * Training Programs Management Page for Trainify Admin Panel
 *
 * This page handles the management of training programs including:
 * - Viewing training programs list
 * - Adding new training programs
 * - Editing existing training programs
 * - Deleting training programs
 */

import React, { useState } from "react";
import Layout from "../components/dashboards/Layout";
import Topbar from "../components/dashboards/Topbar";
import DataTable from "../components/dashboards/DataTable";
import AddEditModal from "../components/dashboards/AddEditModal";
import ConfirmDialog from "../components/dashboards/ConfirmDialog";
import {
  trainingPrograms,
  formatPrice,
  getStatusBadge,
  type TrainingProgram,
} from "../data/sample";
import type {
  Column,
  ActionsConfig,
} from "../components/dashboards/DataTable/types";

const TrainingProgramsPage: React.FC = () => {
  // State management
  const [addEditModalOpen, setAddEditModalOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TrainingProgram | null>(
    null
  );

  // Event handlers
  const handleSearch = (query: string) => {
    console.log("Searching training programs for:", query);
    // Implement search logic
  };

  const handleAdd = () => {
    setSelectedItem(null);
    setAddEditModalOpen(true);
  };

  const handleEdit = (item: TrainingProgram) => {
    setSelectedItem(item);
    setAddEditModalOpen(true);
  };

  const handleDelete = (item: TrainingProgram) => {
    setSelectedItem(item);
    setConfirmDialogOpen(true);
  };

  const handlePreview = (item: TrainingProgram) => {
    console.log("Previewing training program:", item);
    // Implement preview logic
  };

  const handleSubmit = (values: Record<string, unknown>) => {
    console.log("Submitting training program values:", values);
    // Implement save logic
    setAddEditModalOpen(false);
    return Promise.resolve();
  };

  const handleConfirmDelete = () => {
    console.log("Deleting training program:", selectedItem);
    // Implement delete logic
    setConfirmDialogOpen(false);
    setSelectedItem(null);
  };

  // Column definitions
  const columns: Column<TrainingProgram>[] = [
    { key: "name", title: "Name", sortable: true },
    { key: "level", title: "Level", sortable: true },
    {
      key: "duration",
      title: "Duration (weeks)",
      sortable: true,
      align: "center",
    },
    {
      key: "workoutsPerWeek",
      title: "Workouts/Week",
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
  const actionsConfig: ActionsConfig<TrainingProgram> = {
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
          title="Training Programs"
          search={{
            placeholder: "Search training programs...",
            onSearch: handleSearch,
          }}
          onAdd={handleAdd}
        />

        <div className="p-4 sm:p-6 lg:p-8">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Training Programs Management
            </h1>
            <p className="text-gray-600 mt-2">
              Create and manage workout programs for different fitness levels
              and goals.
            </p>
          </div>

          {/* Data Table */}
          <div className="space-y-6">
            <DataTable
              columns={columns as unknown as Column<Record<string, unknown>>[]}
              data={trainingPrograms as unknown as Record<string, unknown>[]}
              actions={
                actionsConfig as unknown as ActionsConfig<
                  Record<string, unknown>
                >
              }
              loading={false}
              pagination={{
                page: 1,
                pageSize: 10,
                total: trainingPrograms.length,
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
          title={
            selectedItem ? "Edit Training Program" : "Add New Training Program"
          }
        />

        {/* Confirm Delete Dialog */}
        <ConfirmDialog
          open={confirmDialogOpen}
          title="Delete Training Program"
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

export default TrainingProgramsPage;
