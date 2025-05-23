import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
    {
      title: "Headers",
      url: "#",
      items: [
        {
          title: "Header 1",
          url: "#",
        },
        {
          title: "Header 2",
          url: "#",
          isActive: true,
        },
        {
          title: "Header 3",
          url: "#",
        },
        {
          title: "Header 4",
          url: "#",
        },
        {
          title: "Header 5",
          url: "#",
        },
      ],
    },
    {
      title: "Heroes",
      url: "#",
      items: [
        {
          title: "Hero 1",
          url: "#",
        },
        {
          title: "Hero 2",
          url: "#",
        },
        {
          title: "Hero 3",
          url: "#",
        },
        {
          title: "Hero 4",
          url: "#",
        },
        {
          title: "Hero 5",
          url: "#",
        },
        {
          title: "Hero 6",
          url: "#",
        },
      ],
    },
    {
      title: "Navigation",
      url: "#",
      items: [
        {
          title: "Navigation 1",
          url: "#",
        },
        {
          title: "Navigation 2",
          url: "#",
        },
        {
          title: "Navigation 3",
          url: "#",
        },
        {
          title: "Navigation 4",
          url: "#",
        },
        {
          title: "Navigation 5",
          url: "#",
        },
      ],
    },
    {
      title: "Footers",
      url: "#",
      items: [
        {
          title: "Footer 1",
          url: "#",
        },
        {
          title: "Footer 2",
          url: "#",
        },
        {
          title: "Footer 3",
          url: "#",
        },
        {
          title: "Footer 4",
          url: "#",
        },
        {
          title: "Footer 5",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
