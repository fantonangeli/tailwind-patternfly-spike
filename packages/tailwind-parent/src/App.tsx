/*
 * Copyright 2021-Present The Serverless Workflow Specification Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import "@tailwind-patternfly/tailwind-child/dist/tailwind-child.css";
import "./App.css";

import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  ChevronRightIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { FeatureSelection } from "@tailwind-patternfly/tailwind-child";

const navItems = [
  { id: 0, name: "System panel", href: "#system-panel" },
  { id: 1, name: "Policy", href: "#policy" },
  { id: 2, name: "Authentication", href: "#auth" },
  { id: 3, name: "Network services", href: "#network" },
  { id: 4, name: "Server", href: "#server" },
];

// Tailwind-based equivalent of the PatternFly parent app layout.
// Layout: masthead + sidebar + breadcrumb + title + card gallery + child component.
export const TailwindParentApp = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* ===== MASTHEAD ===== */}
      <header className="flex h-16 shrink-0 items-center bg-gray-900 px-4 text-white">
        {/* Hamburger toggle */}
        <button
          type="button"
          className="mr-4 rounded p-1.5 text-gray-300 hover:bg-gray-800 hover:text-white"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Global navigation"
        >
          {sidebarOpen ? (
            <XMarkIcon className="size-5" aria-hidden="true" />
          ) : (
            <Bars3Icon className="size-5" aria-hidden="true" />
          )}
        </button>

        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-white">TailwindParent</span>
        </div>

        {/* Toolbar (right side) */}
        <div className="ml-auto flex items-center gap-2">
          {/* Notification bell */}
          <button
            type="button"
            className="rounded p-1.5 text-gray-300 hover:bg-gray-800 hover:text-white"
            aria-label="Notifications"
          >
            <BellIcon className="size-5" aria-hidden="true" />
          </button>

          {/* App launcher */}
          <button
            type="button"
            className="rounded p-1.5 text-gray-300 hover:bg-gray-800 hover:text-white"
            aria-label="Applications"
          >
            <Squares2X2Icon className="size-5" aria-hidden="true" />
          </button>

          {/* Settings */}
          <button
            type="button"
            className="rounded p-1.5 text-gray-300 hover:bg-gray-800 hover:text-white"
            aria-label="Settings"
          >
            <Cog6ToothIcon className="size-5" aria-hidden="true" />
          </button>

          {/* Help */}
          <button
            type="button"
            className="rounded p-1.5 text-gray-300 hover:bg-gray-800 hover:text-white"
            aria-label="Help"
          >
            <QuestionMarkCircleIcon className="size-5" aria-hidden="true" />
          </button>

          {/* User dropdown */}
          <div className="relative ml-2">
            <button
              type="button"
              className="flex items-center gap-2 rounded px-2 py-1 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              <UserCircleIcon className="size-6" aria-hidden="true" />
              <span>Ned Username</span>
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 z-10 mt-1 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  My profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  User management
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* ===== SIDEBAR ===== */}
        {sidebarOpen && (
          <nav className="w-64 shrink-0 border-r border-gray-200 bg-white" aria-label="Nav">
            <ul className="py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveItem(item.id);
                    }}
                    className={`block px-6 py-2.5 text-sm font-medium ${
                      activeItem === item.id
                        ? "border-l-4 border-indigo-600 bg-indigo-50 text-indigo-700"
                        : "border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* ===== MAIN CONTENT ===== */}
        <main className="flex-1 overflow-auto bg-gray-100" id="main-content">
          {/* Breadcrumb */}
          <nav className="border-b border-gray-200 bg-white px-6 py-3" aria-label="Breadcrumb">
            <ol className="flex items-center text-sm text-gray-500">
              <li>Section home</li>
              <li className="flex items-center">
                <ChevronRightIcon className="mx-2 size-3.5 text-gray-400" aria-hidden="true" />
                <a href="#" className="hover:text-gray-700">
                  Section title
                </a>
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="mx-2 size-3.5 text-gray-400" aria-hidden="true" />
                <a href="#" className="hover:text-gray-700">
                  Section title
                </a>
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="mx-2 size-3.5 text-gray-400" aria-hidden="true" />
                <span className="font-medium text-gray-900">Section landing</span>
              </li>
            </ol>
          </nav>

          {/* Page title */}
          <div className="border-b border-gray-200 bg-white px-6 py-6">
            <h1 className="text-2xl font-bold text-gray-900">Main title</h1>
            <p className="mt-1 text-sm text-gray-600">This is a full page demo.</p>
          </div>

          {/* Card gallery */}
          <section className="px-6 py-6" aria-label="Card gallery">
            <div className="mb-4 rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800">
              <strong>Tailwind Parent</strong> — The parent has its own global overrides: Comic Sans
              font, green dotted heading borders, orange paragraph borders, red underlined dt text,
              and green solid SVG outlines. These should be visible here but NOT in the child below.
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {Array.from({ length: 10 }).map((_value, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm text-gray-700">This is a card</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tailwind Child Component */}
          <section className="px-6 py-6" aria-label="Tailwind Component">
            <h2 className="mb-2 text-xl font-bold text-gray-900">Tailwind Component</h2>
            <div className="mb-4 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
              <strong>Tailwind Child</strong> — The child has its own scoped overrides (via
              .dec-root): Georgia serif font, red solid heading borders, blue paragraph borders,
              purple uppercase dt text, and red dashed SVG outlines. These should be visible here
              but NOT in the parent above. If the parent&apos;s Comic Sans / green / orange styles
              appear here, the parent leaked into the child.
            </div>
            <FeatureSelection />
          </section>
        </main>
      </div>
    </div>
  );
};
