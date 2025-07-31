https://aka.ms/gettss


https://support.microsoft.com/files?workspace=eyJhbGciOiJSUzI1NiIsImtpZCI6IjUwNjQwRTE0NEREODg5MzE5NzYzRTBFNjM5RjMzNjdFQUNDNzlBRDAiLCJ0eXAiOiJKV1QifQ.eyJ3c2lkIjoiOTRmZmZkNzEtODRkYi00YWZjLWIxZTQtYzk3MWVjMmY0OGI1Iiwic3IiOiIyNTA3MjQwMDEwMDAwMjQ1Iiwic3YiOiJ2MSIsInJzIjoiRXh0ZXJuYWwiLCJ3dGlkIjoiMjIwZjRlMGItOTYxYS00MzhiLTg1YmItOGZlZDQzZWM3MDU3IiwiYXBwaWQiOiI0ZTc2ODkxZC04NDUwLTRlNWUtYmUzOC1lYTNiZDZlZjIxZTUiLCJuYmYiOjE3NTM0Mzg2OTMsImV4cCI6MTc2MTIxNDY5MywiaWF0IjoxNzUzNDM4NjkzLCJpc3MiOiJodHRwczovL2FwaS5kdG1uZWJ1bGEubWljcm9zb2Z0LmNvbSIsImF1ZCI6Imh0dHA6Ly9zbWMifQ.m_I1h5LgfaKqdwTTrhx0dl5gjhkXJp4ykW6Z5qt9onsK6W57IowRE1XGwPNYF9BgcoJLs8IgHUqD8hO4HALmlILZsmYN6iAx7Jvr2r8NRQoG0_0kDveQ8VZ5pmO8-S2Kh7O75qUEcO594i0li3Kq501G9QUCLxKfkIbUcddXGQa9Ep1Lptw8Zg_0hmTxT5bZ4doBrvGivg2f6kPqNhIXK_n0fnm7yqTWExOojConSyPGZEajAYTQmHA5mcaUxVXwjRfdibKRFuQckkPfpWhEB-uKV8E_mgpc6vIXaj_tOuHy_32kLCdcrj2zrdhXL7xaOcLxbfYCK4fx_G0euFHxlw&wid=94fffd71-84db-4afc-b1e4-c971ec2f48b5



# Enable Ping (ICMP Echo Request)
Enable-NetFirewallRule -Name FPS-ICMP4-ERQ-In -ErrorAction SilentlyContinue

# Enable File and Printer Sharing for all profiles
Enable-NetFirewallRule -DisplayGroup "File and Printer Sharing" -ErrorAction SilentlyContinue

# Enable WMI access (used by SCCM for detection, inventory, etc.)
Enable-NetFirewallRule -DisplayGroup "Windows Management Instrumentation (WMI)" -ErrorAction SilentlyContinue

# Verify the current network profile and change it to 'DomainAuthenticated' if needed
$profile = Get-NetConnectionProfile
if ($profile.NetworkCategory -ne 'DomainAuthenticated') {
    Write-Output "⚠️ Current profile is $($profile.NetworkCategory). Recommend switching to Domain for SCCM functionality."
    # Optional: Uncomment the line below to force it (use with caution)
    # Set-NetConnectionProfile -Name $profile.Name -NetworkCategory DomainAuthenticated
}

Write-Output "✅ SCCM firewall rules enabled and verified."


# 🟢 Enable Ping (ICMP Echo Request) - Domain only
Set-NetFirewallRule -Name FPS-ICMP4-ERQ-In -Profile Domain
Enable-NetFirewallRule -Name FPS-ICMP4-ERQ-In


# 🟢 Enable File and Printer Sharing - Domain only
Get-NetFirewallRule -DisplayGroup "File and Printer Sharing" | Where-Object {$_.Profile -like "*Domain*"} | Enable-NetFirewallRule -ErrorAction SilentlyContinue

# 🟢 Enable WMI - Domain only
Get-NetFirewallRule -DisplayGroup "Windows Management Instrumentation" | Set-NetFirewallRule -Profile Domain

# 🟢 Then enable them (if not already)
Enable-NetFirewallRule -DisplayGroup "File and Printer Sharing" -ErrorAction SilentlyContinue
Enable-NetFirewallRule -DisplayGroup "Windows Management Instrumentation (WMI)" -ErrorAction SilentlyContinue
