/**
 * Supplements Management Page for Trainify Admin Panel
 *
 * This page handles the management of supplements including:
 * - Viewing supplements list
 * - Adding new supplements
 * - Editing existing supplements
 * - Deleting supplements
 */

import React, { useState } from "react";
import Layout from "../components/dashboards/Layout";
import Topbar from "../components/dashboards/Topbar";
import DataTable from "../components/dashboards/DataTable";
import AddEditModal from "../components/dashboards/AddEditModal";
import ConfirmDialog from "../components/dashboards/ConfirmDialog";
import {
  supplements,
  formatPrice,
  formatDate,
  getStatusBadge,
  type Supplement,
} from "../data/sample";
import type {
  Column,
  ActionsConfig,
} from "../components/dashboards/DataTable/types";

const SupplementsPage: React.FC = () => {
  // State management
  const [addEditModalOpen, setAddEditModalOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Supplement | null>(null);

  // Event handlers
  const handleSearch = (query: string) => {
    console.log("Searching supplements for:", query);
    // Implement search logic
  };

  const handleAdd = () => {
    setSelectedItem(null);
    setAddEditModalOpen(true);
  };

  const handleEdit = (item: Supplement) => {
    setSelectedItem(item);
    setAddEditModalOpen(true);
  };

  const handleDelete = (item: Supplement) => {
    setSelectedItem(item);
    setConfirmDialogOpen(true);
  };

  const handlePreview = (item: Supplement) => {
    console.log("Previewing supplement:", item);
    // Implement preview logic
  };

  const handleSubmit = (values: Record<string, unknown>) => {
    console.log("Submitting supplement values:", values);
    // Implement save logic
    setAddEditModalOpen(false);
    return Promise.resolve();
  };

  const handleConfirmDelete = () => {
    console.log("Deleting supplement:", selectedItem);
    // Implement delete logic
    setConfirmDialogOpen(false);
    setSelectedItem(null);
  };

  // Column definitions
  const columns: Column<Supplement>[] = [
    { key: "name", title: "Name", sortable: true },
    { key: "category", title: "Category", sortable: true },
    {
      key: "price",
      title: "Price",
      sortable: true,
      align: "right",
      render: (row) => formatPrice(row.price),
    },
    {
      key: "stock",
      title: "Stock",
      sortable: true,
      align: "center",
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
  const actionsConfig: ActionsConfig<Supplement> = {
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
          title="Supplements"
          search={{
            placeholder: "Search supplements...",
            onSearch: handleSearch,
          }}
          onAdd={handleAdd}
        />

        <div className="p-4 sm:p-6 lg:p-8">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Supplements Management
            </h1>
            <p className="text-gray-600 mt-2">
              Manage your supplement products, inventory, and pricing.
            </p>
          </div>

          {/* Data Table */}
          <div className="space-y-6">
            <DataTable
              columns={columns as unknown as Column<Record<string, unknown>>[]}
              data={supplements as unknown as Record<string, unknown>[]}
              actions={
                actionsConfig as unknown as ActionsConfig<
                  Record<string, unknown>
                >
              }
              loading={false}
              pagination={{
                page: 1,
                pageSize: 10,
                total: supplements.length,
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
          title={selectedItem ? "Edit Supplement" : "Add New Supplement"}
        />

        {/* Confirm Delete Dialog */}
        <ConfirmDialog
          open={confirmDialogOpen}
          title="Delete Supplement"
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

export default SupplementsPage;
