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

import "./FeatureSelection.css";
import * as React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

// Original component: https://tailwindcss.com/plus/ui-blocks/marketing/sections/feature-sections#component-64ac58e032276db96bf343a8d4f332a8
export const FeatureSelection = () => {
  return (
    <div className="dec-root">
      <div className="dec:bg-white dec:py-24 sm:dec:py-32">
        <div className="dec:mx-auto dec:max-w-7xl dec:px-6 lg:dec:px-8">
          <div className="dec:mx-auto dec:max-w-2xl lg:dec:text-center">
            <h2 className="dec:text-base/7 dec:font-semibold dec:text-indigo-600">Deploy faster</h2>
            <p className="dec:mt-2 dec:text-4xl dec:font-semibold dec:tracking-tight dec:text-pretty dec:text-gray-900 sm:dec:text-5xl lg:dec:text-balance">
              Everything you need to deploy your app
            </p>
            <p className="dec:mt-6 dec:text-lg/8 dec:text-gray-700">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget
              egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="dec:mx-auto dec:mt-16 dec:max-w-2xl sm:dec:mt-20 lg:dec:mt-24 lg:dec:max-w-4xl">
            <dl className="dec:grid dec:max-w-xl dec:grid-cols-1 dec:gap-x-8 dec:gap-y-10 lg:dec:max-w-none lg:dec:grid-cols-2 lg:dec:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="dec:relative dec:pl-16">
                  <dt className="dec:text-base/7 dec:font-semibold dec:text-gray-900">
                    <div className="dec:absolute dec:top-0 dec:left-0 dec:flex dec:size-10 dec:items-center dec:justify-center dec:rounded-lg dec:bg-indigo-600">
                      <feature.icon aria-hidden="true" className="dec:size-6 dec:text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="dec:mt-2 dec:text-base/7 dec:text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
